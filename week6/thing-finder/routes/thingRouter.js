const express = require('express');
const thingRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

/*
ASSIGNMENT::
• should be able to check for any query parameters that may have been passed into the url of the request and filter the results based on those query parameters

** you can write your server code with the assumption that there is only one query parameter option available **
*/

let shoes = [
    {brand: "Nike",
    price: 77.65,
    type: "sneakers",
    _id: uuidv4()},

    {brand: "Sarto",
    price: 59.97,
    type: "flats",
    _id: uuidv4()},

    {brand: "Steve Madden",
    price: 77.65,
    type: "sandals",
    _id: uuidv4()},

    {brand: "Wild Diva",
    price: 24.97,
    type: "mules",
    _id: uuidv4()},

    {brand: "Adidas",
    price: 82.49,
    type: "sneakers",
    _id: uuidv4()},

    {brand: "Naturalizer",
    price: 120,
    type: "sandals",
    _id: uuidv4()}
]

//Router
thingRouter
    .get('/', (req, res, next) => {
        res.status(200).send(shoes);
    })

    //Parameter
    .get('/:shoesId', (req, res, next) => {
        const shoeB = req.params.shoesId;
        const shoeBrand = shoes.filter(shoe => shoe.brand === shoeB);

        if(!shoeBrand){
            const error = new Error('Item not found!!!!!!!!!!!');
            return next(error);
        }

        res.status(200).send(shoeBrand);
        console.log(req.params);
    })

    //Query
    .get('/key/type', (req, res) => {
        const shoeType = req.query.type;
        const myType = shoes.filter(shoe => shoe.type === shoeType);

        res.status(200).send(myType);
        console.log(myType);
    })

module.exports = thingRouter;