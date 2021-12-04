const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Genre, Post, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'created_at',
            'updated_at'
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
        //console.error(posts)
        res.render('homepage', {
            posts
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;