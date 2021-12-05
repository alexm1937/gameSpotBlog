const router = require('express').Router();
const { User, Genre, Post, Comment } = require('../models');

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
        //console.log(posts)
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
        console.log(data)
        if (data.length === 0) {
            res.status(404).json({ message: 'No category found with this id' });
            return;
        }

        const posts = data.map(post => post.get({ plain: true}));
        console.log(posts)
        res.render('category', {
            posts,
            loggedIn: req.session.loggedIn
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

module.exports = router;