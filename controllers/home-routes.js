const router = require('express').Router();
const { User, Genre, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Genre
            }
        ]
    }).then(data => {
        const posts = data.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/category/:id', (req, res) => {
    Post.findAll({
        where: {
            genre_id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            {
                model: Genre
            },
            {
                model: Comment,
                attributes: ['id', 'content', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    }).then(data => {
        if (data.length === 0) {
            res.status(404).json({ message: 'No category found with this id' });
            return;
        }

        const posts = data.map(post => post.get({ plain: true}));
       
        res.render('category', {
            posts,
            loggedIn: req.session.loggedIn,
            user_id: req.session.user_id
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/post/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Genre
            },
            {
                model: Comment,
                attributes: ['id', 'content', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }

        const post = data.get({ plain: true });

        res.render('comment', {
            post,
            loggedIn: req.session.loggedIn
          });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/post/edit-post/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'content'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Genre
            },
            
        ]
    }).then(data => {
        if (!data) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }

        const post = data.get({ plain: true });

        res.render('edit-post', {
            post,
            loggedIn: req.session.loggedIn
          });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;