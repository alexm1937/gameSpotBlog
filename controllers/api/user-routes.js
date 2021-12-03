
const router = require('express').Router();
const { User } = require('../../models');
//const checkAuth = require('../../utils/auth');

//getall
router.get('/', (req, res) => {
    User.findAll({ attributes: {exclude: ['password']} })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
}); 

//getById
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password']},
        where: { id: req.params.id }
        //include posts and comments?
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found at this ID' });
            return;
        }
        res.json(dbUserData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//create user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.email = dbUserData.email;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        })
    })
    .catch(err => {
        console.log(err);
        return res.status(500).json({error: err.message});
    });
});        

//login
router.post('/login', (req, res) => { 
    // expects {email: 'uyser@gmail.com', password: 'asd123'}
    User.findOne({
        email: {email: req.body.email}
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({message: 'No user found with that email!'});
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);
        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.email = dbUserData.email;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            
            res.json({ user: dbUserData, message: 'You are now logged in!' });
        })
    });
});

//logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

//update user
router.put('/:id', checkAuth, (req, res) => {
    User.update(req.body, {
        individualHooks: true, 
        where : { id: req.params.id}
    })
    .then(dbUserData => {
        if(!dbUserData[0]) {
            res.status(404).json({message: 'No user found at this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//del user
router.delete('/:id', checkAuth, (req, res) => {
    User.destroy({
        where: {id: req.params.id}
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({message: 'No user found at this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;