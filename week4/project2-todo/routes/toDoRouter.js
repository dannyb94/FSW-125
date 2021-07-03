const express = require('express');
const toDoRouter = express.Router();
const {v4: uuidv4} = require('uuid');

let checklist = [
    {name: "Arco",
    description: "Get gas.",
    imageUrl: "/images/arco-icon.jpg",
    isCompleted: false,
    _id: uuidv4()},

    {name: "Grocery Store",
    description: "Pick up salmon, mushrooms, and rosemary",
    imageUrl: "/images/Salmon-in-Creamy-Mushroom-Sauce.jpg",
    isCompleted: false,
    _id: uuidv4()},

    {name: "Car Wash",
    description: "Get the fancy wash",
    imageUrl: "/images/car-wash.jpg",
    isCompleted: false,
    _id: uuidv4()},

    {name: "Pet Store",
    description: "Pick up food, hay, and shampoo",
    imageUrl: "/images/pet-store.jpg",
    isCompleted: false,
    _id: uuidv4()}
]

//Router
toDoRouter
    //Get All
    .get('/', (req, res) => {
        res.send(checklist);
    })

    //Parameter - Get One
    .get('/:checklistId', (req, res) => {
        const checklistId = req.params.checklistId;
        const singleItem = checklist.find(item => item._id === checklistId);

        console.log(req.params);
        res.send(singleItem);
    })

    //Query Parameter - Get Some
    .get('/', (req, res) => {
        const itemsCompleted = req.query.isCompleted;
        const completedItem = checklist.filter(item => item.isCompleted === itemsCompleted);

        console.log(completedItem);
        res.send(completedItem);
    })

    //Post
    .post('/', (req, res) => {
        const newItem = req.body;
        newItem._id = uuidv4();
        checklist.push(newItem);

        res.send(`New post was successful! ${newItem.name} was added to your to do list.`)
    })

    //Delete
    .delete('/:checklistId', (req, res) => {
        const checklistId = req.params.checklistId;
        const listIndex = checklist.findIndex(item => item._id === checklistId);
        checklist.splice(listIndex, 1);

        res.send('A to do item has been deleted.')
    })

    //Put
    .put('/:checklistId', (req, res) => {
        const checklistId = req.params.checklistId;
        const listIndex = checklist.findIndex(item => item._id === checklistId);
        const updatedList = Object.assign(checklist[listIndex], req.body);

        res.send('A to do item has been updated.')
    })




module.exports = toDoRouter;