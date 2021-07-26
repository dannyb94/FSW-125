const express = require('express');
const animeRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let animeFeatures = [
    {name: 'Bleach',
    genre: 'Shonen',
    released: true,
    rent: 7.99,
    info: ['Action-Adventure', 'Fantasy', 'Rated-PG13'],
    _id: uuidv4()},

    {name: 'Jujutsu Kaisen',
    genre: 'Shonen',
    released: true,
    rent: 13.99,
    info: ['Sci-Fi', 'Futuristic', 'Rated-PG13'],
    _id: uuidv4()},

    {name: 'Attack on Titan',
    genre: 'Thriller',
    released: true,
    rent: 9.50,
    info: ['Action', 'Thriller', 'Rated-R'],
    _id: uuidv4()},

    {name: '91 Days',
    genre: 'Seinen',
    released: false,
    rent: 23.99,
    info: ['Adventure', 'Prohibition', 'Rated-R'],
    _id: uuidv4()},

    {name: 'Demon Slayer',
    genre: 'Supernatural',
    released: true,
    rent: 10,
    info: ['Action-Adventure', 'Fantasy', 'Rated-PG13'],
    _id: uuidv4()}
]

//Router
animeRouter
    //Get All
    .get('/', (req, res, next) => {
        res.status(200).send(animeFeatures);
    })

    //Parameter
    .get('/:animeId', (req, res, next) => {
        const animeId = req.params.animeId
        const singleAnime = animeFeatures.find(anime => anime._id === animeId);

        if(!singleAnime){
            const error = new Error('Item not found.')
            return next(error)
        }

        res.send(singleAnime)
    })

    //Query
    .get('/search/genre', (req, res) => {
        const animeGenre = req.query.genre
        const genres = animeFeatures.filter(anime => anime.genre === animeGenre)

        res.status(200).send(genres)
    })

    //Post
    .post('/', (req, res) => {
        const newAnime = req.body
        newAnime._id = uuidv4()
        animeFeatures.push(newAnime)

        res.status(201).send(newAnime)
    })
    
    //Put
    .put('/:animeId', (req, res) => {
        const animeId = req.params.animeId
        const animeIndex = animeFeatures.findIndex(anime => anime._id === animeId)

        Object.assign(animeFeatures[animeIndex], req.body)
        res.send('Listing was deleted.')
    })

    //Delete
    .delete('/:animeId', (req, res) => {
        const animeId = req.params.animeId;
        const animeIndex = animeFeatures.findIndex(anime => anime._id === animeId)
        animeFeatures.splice(animeIndex, 1)

        if(!animeIndex){
            const error = new Error('Listing not found.')
            return next(error)
        }

        res.send('Listing was deleted.')
    })

module.exports = animeRouter;