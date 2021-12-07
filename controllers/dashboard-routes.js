const router = require('express').Router();
const { User, Genre, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
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
        // Serializes data before passing to template.
        const posts = data.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true, user_id: req.session.user_id });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;