/*
Create a server that has at least 3 unique endpoints (examples: /movies, /actors)

Each endpoint should send back a different array of objects when tested.

Endpoints should follow the design principles of REST.
No frontend is required, the endpoints can be tested in the browser or in Postman by requesting to the localhost port.
*/

const express = require('express');
const app = express();

const PORT = 3000;

let shows = [
    {show: "Spongebob"},
    {show: "Regular Show"},
    {show: "Scooby-Doo"}
]

let mainChars = [
    {squad: "Spongebob, Gary, Patrick, Squidward"},
    {squad: "Mordecai, Rigby, Pops, Muscle Man, Skips, Benson"},
    {squad: "Scooby, Shaggy, Fred, Velma, Daphne"}
] 

let antags =[
    {anti: "Bubble Bass, Dirty Bubble, Plankton"},
    {anti: "Garret Bobby Ferguson, Klorgbane the Destroyer, Krampus, Unicorns"},
    {anti: "Phantom, Redbeard's Ghost, Witch Doctor, Ghost Clown"}
]

app.get('/cartoons/shows', (req, res) => {
    res.send(shows)
})

app.get('/cartoons/mainChars', (req, res) => {
    res.send(mainChars)
})

app.get('/cartoons/antags', (req, res) => {
    res.send(antags)
})

//server start
app.listen(PORT, () => {
    console.log(`App starts on port ${PORT}`)
})