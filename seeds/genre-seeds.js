const sequelize = require('../config/connection');
const { Genre, Post } = require('../models');

const genredata = [
    {
        genre_name: 'RPG'
    },
    {
        genre_name: 'Fighting'
    },
    {
        genre_name: 'Shooters'
    },
    {
        genre_name: 'Horror'
    },
    {
        genre_name: 'Racing'
    },
    {
        genre_name: 'Sports'
    },
    {
        genre_name: 'Platformer'
    },
    {
        genre_name: 'Action-adventure'
    }
]