const express = require('express');
const bountyRouter = express.Router();
const { v4: uuidv4} = require('uuid');

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
    .get('/', (req, res) => {
        res.send(bounties);
    })

    .post('/', (req, res) => {
        const newbounty = req.body;
        newbounty._id = uuidv4()
        bounties.push(newbounty);

        console.log(bounties);
        res.send(`Post successful! ${newbounty.bounties} was added to the open kill list.`);
    })

module.exports = bountyRouter;