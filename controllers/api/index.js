const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const genreRoutes = require('./genre-routes');


router.use('/users/', userRoutes);
router.use('/posts/', postRoutes);
router.use('/comments/', commentRoutes);
router.use('/genres/', genreRoutes);

module.exports = router;