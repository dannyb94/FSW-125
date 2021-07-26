const express = require('express');
const movieRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let movies = [
    {name: 'National Treasure',
    genre: 'Mystery',
    released: true,
    rent: 7.99,
    info: ['Thriller', 'Lorem', 'Rated-PG13'],
    _id: uuidv4()},

    {name: 'Lorem2',
    genre: 'Lorem',
    released: true,
    rent: 13.99,
    info: ['Lorem3', 'Lorem', 'Rated-PG13'],
    _id: uuidv4()},

    {name: 'Lorem4',
    genre: 'Lorem',
    released: true,
    rent: 9.50,
    info: ['Lorem', 'Lorem', 'Rated-R'],
    _id: uuidv4()},

    {name: 'Lorem5',
    genre: 'Lorem',
    released: false,
    rent: 23.99,
    info: ['Lorem', 'Lorem', 'Rated-R'],
    _id: uuidv4()},

    {name: 'Lorem6',
    genre: 'Lorem',
    released: true,
    rent: 10,
    info: ['Lorem', 'Lorem', 'Rated-PG13'],
    _id: uuidv4()}
]

//Router
movieRouter
    //Get All
    .get('/', (req, res, next) => {
        res.status(200).send(movies);
    })

    //Parameter
    .get('/:movieId', (req, res, next) => {
        const movieId = req.params.movieId
        const singleMovie = movies.find(movie => movie._id === movieId);

        if(!singleMovie){
            const error = new Error('Item not found.')
            return next(error)
        }

        res.send(singleMovie)
    })

    //Query
    .get('/search/genre', (req, res) => {
        const movieGenre = req.query.genre
        const genres = movies.filter(movie => movie.genre === movieGenre)

        res.status(200).send(genres)
    })

    //Post
    .post('/', (req, res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)

        res.status(201).send(newMovie)
    })
    
    //Put
    .put('/:movieId', (req, res) => {
        const movieId = req.params.movieId
        const movieIndex = movies.findIndex(movie => movie._id === movieId)

        Object.assign(movies[movieIndex], req.body)
        res.send('Listing was deleted.')
    })

    //Delete
    .delete('/:movieId', (req, res) => {
        const movieId = req.params.movieId;
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        movies.splice(movieIndex, 1)

        if(!movieIndex){
            const error = new Error('Listing not found.')
            return next(error)
        }

        res.send('Listing was deleted.')
    })

module.exports = movieRouter;