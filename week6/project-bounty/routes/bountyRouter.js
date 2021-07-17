const express = require('express');
const bountyRouter = express.Router();
const {v4: uuidv4} = require('uuid');

let bounties = [
    {name: "Woodman",
    gang: "Tyger Claws",
    price: 86000,
    lastSeen: "Clouds",
    living: true,
    _id: uuidv4()},

    {name: "Royce",
    gang: "Maelstrom",
    price: 126000,
    lastSeen: "Food Processing Plant (Watson)",
    living: true,
    _id: uuidv4()},

    {name: "Adam Smasher",
    gang: "No Affiliation",
    price: 1200000,
    lastSeen: "???",
    living: true,
    _id: uuidv4()},

    {name: "Placide",
    gang: "Voodoo Boys",
    price: 783000,
    lastSeen: "Pacifica",
    living: true,
    _id: uuidv4()}
]

//Router
bountyRouter
    //Get All
    .get('/', (req, res, next) => {
        res.status(200).send(bounties);
    })

    //Parameter - Get One
    .get('/:bountyId', (req, res, next) => {
        const bountyId = req.params.bountyId;
        const singleBounty = bounties.find(bounty => bounty._id === bountyId);

        if(!singleBounty){
            const error = new Error('This item was not found.')
            return next(error)
        }

        res.send(singleBounty);
        console.log(req.params)
    })

    //Query String - Get Some
    .get('/search/lastSeen', (req, res) => {
        const bountySeen = req.query.lastSeen;
        const seenBounty = bounties.filter(bounty => bounty.lastSeen === bountySeen);
        
        res.status(200).send(seenBounty);
        console.log(seenBounty)
    })

    //Post
    .post('/', (req, res) => {
        const newbounty = req.body;
        newbounty._id = uuidv4()
        bounties.push(newbounty);

        console.log(bounties);
        res.status(201).send(newbounty /*`Post successful! ${newbounty.bounties} was added to the open kill list.`*/);
    })

    //Delete
    .delete('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId;
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
        bounties.splice(bountyIndex, 1);

        if(!bountyIndex){
            const error = new Error('This item was not found.')
            return next(error)
        }

        res.send('The bounty has been deleted.');
    })

    //Put
    .put('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId;
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
        /*const updatedBounty =*/ Object.assign(bounties[bountyIndex], req.body);

        res.send(`A bounty has been updated.`);
    })

module.exports = bountyRouter;