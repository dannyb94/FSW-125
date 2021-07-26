const express = require('express');
const cartoonRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

let cartoons = [
    {name: 'Regular Show',
    genre: 'Adventure Fiction',
    released: true,
    rent: 7.49,
    info: ['Comedy, ', 'Surreal Humor, ', 'Rated-PG'],
    _id: uuidv4()},

    {name: 'Adventure Time',
    genre: 'Adventure',
    released: true,
    rent: 8.59,
    info: ['Action, ', 'Romance, ', 'Rated-PG'],
    _id: uuidv4()},

    {name: 'Scooby-Doo',
    genre: 'Mystery',
    released: true,
    rent: 14.99,
    info: ['Animated, ', 'Comedy Horror, ', 'Rated-PG'],
    _id: uuidv4()},

    {name: 'Rugrats',
    genre: 'Slice of Life',
    released: true,
    rent: 23.79,
    info: ['Animated, ', 'Adventure, ', 'Rated-G'],
    _id: uuidv4()},

    {name: 'Rocket Power',
    genre: 'Sports',
    released: true,
    rent: 17.50,
    info: ['Adventure, ', 'Comedy, ', 'Rated-PG'],
    _id: uuidv4()}
]

//Router
cartoonRouter
    //Get All
    .get('/', (req, res, next) => {
        res.status(200).send(cartoons);
    })

    //Parameter
    .get('/:cartoonId', (req, res, next) => {
        const cartoonId = req.params.cartoonId
        const singleCartoon = cartoons.find(cartoon => cartoon._id === cartoonId);

        if(!singleCartoon){
            const error = new Error('Item not found.')
            return next(error)
        }

        res.send(singleCartoon)
    })

    //Query
    .get('/search/genre', (req, res) => {
        const cartoonGenre = req.query.genre
        const genres = cartoons.filter(cartoon => cartoon.genre === cartoonGenre)

        res.status(200).send(genres)
    })

    //Post
    .post('/', (req, res) => {
        const newCartoon = req.body
        newCartoon._id = uuidv4()
        cartoons.push(newCartoon)

        res.status(201).send(newCartoon)
    })
    
    //Put
    .put('/:cartoonId', (req, res) => {
        const cartoonId = req.params.cartoonId
        const cartoonIndex = cartoons.findIndex(cartoon => cartoon._id === cartoonId)

        Object.assign(cartoons[cartoonIndex], req.body)
        res.send('Listing was deleted.')
    })

    //Delete
    .delete('/:cartoonId', (req, res) => {
        const cartoonId = req.params.cartoonId;
        const cartoonIndex = cartoons.findIndex(cartoon => cartoon._id === cartoonId)
        cartoons.splice(cartoonIndex, 1)

        if(!cartoonIndex){
            const error = new Error('Listing not found.')
            return next(error)
        }

        res.send('Listing was deleted.')
    })

module.exports = cartoonRouter;