
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//get all comments
router.get('/', (req, res) => {
    Comment.findAll({
        attributes: ['id', 'contents', 'user_id', 'post_id', 'created_at'],
        order: [['created_at', 'DESC']]
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//create comment
router.post('/', withAuth, (req, res) => {
    if(req.session) {
        Comment.create({
            contents: req.body.contents,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

//del comment
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {id: req.params.id}
    })
    .then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json({message: 'No comment found at this id'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;