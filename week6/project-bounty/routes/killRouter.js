const express = require('express');
const killRouter = express.Router();
const { v4: uuidv4} = require('uuid');

let kills = [
    {name: "Akira",
    gang: "Arasaka",
    price: 237000,
    lastSeen: "Arasaka Tower",
    living: false,
    _id: uuidv4()},

    {name: "Sandayu Oda",
    gang: "Arasaka",
    price: 892000,
    lastSeen: "???",
    living: false,
    _id: uuidv4()}
]

//Router
killRouter
    .get('/', (req, res) => {
        res.send(kills);
    })

    //Parameter
    .get('/:killId', (req, res) => {
        const killId = req.params.killId;
        const singleKill = kills.find(kill => kill._id === killId);

        res.send(singleKill);
    })

    //Query Parameter
    .get('/search/lastSeen', (req, res) => {
        const bountySeen = req.query.lastSeen;
        const seenBounty = bounties.filter(bounty => bounty.lastSeen === bountySeen);
        //
        res.send(seenBounty);
        console.log(seenBounty)
    })

    .post('/', (req, res) => {
        const newkill = req.body;
        newkill._id = uuidv4()
        kills.push(newkill);

        console.log(kills);
        res.send(`Post successful! Added ${newkill.kills} to your personal kill list.`);
    })

    //Delete
    .delete('/:killId', (req, res) => {
        const killId = req.params.killId;
        const killIndex = kills.findIndex(kill => kill._id === killId);
        kills.splice(killIndex, 1);

        res.send('The kill has been deleted.');
    })

    //Put
    .put('/:killId', (req, res) => {
        const killId = req.params.killId;
        const killIndex = kills.findIndex(kill => kill._id === killId);
        const updatedKill = Object.assign(kills[killIndex], req.body);

        res.send(`A kill has been updated.`);
    })

module.exports = killRouter;