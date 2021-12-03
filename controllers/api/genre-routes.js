

const router = require('express').Router();
const { Genre } = require('../../models');
//properties of genre_name


router.get('/:id', (req, res) => {
    Genre.findOne({ attributes: ['id', 'genre_name'] })
    .then(dbGenreData => res.json(dbGenreData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Genre.create({
        genre_name: req.body.genre_name
    })
    .then(dbGenreData => res.json(dbGenreData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Genre.destroy({ where: {id: req.params.id}
    })
    .then(dbGenreData => {
        if(!dbGenreData) {
            res.status(404).json({message: 'No genre found at this id'});
            return;
        }
        res.json(dbGenreData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;