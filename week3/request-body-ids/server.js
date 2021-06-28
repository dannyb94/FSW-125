const express = require('express');
const app = express();
const { v4: uuidv4} = require('uuid');

const PORT = 3000

//Middleware
app.use(express.json())

//Data
let shows = [
    {id: uuidv4(),
    show: "Spongebob",
    squad: "Spongebob, Gary, Patrick, Squidward"},

    {id: uuidv4(),
    show: "Regular Show",
    squad: "Mordecai, Rigby, Pops, Muscle Man, Skips, Benson"},

    {id: uuidv4(),
    show: "Scooby-Doo",
    squad: "Scooby, Shaggy, Fred, Velma, Daphne"}
]

//Get
app.get('/cartoons', (req, res) => {
    res.send(shows);
})

//Post
app.post('/cartoons', (req, res) => {
    const newShow = req.body;
    newShow.id = uuidv4()
    shows.push(newShow);

    console.log(shows);
    res.send(`Post successful! Added ${newShow.show} with ${newShow.squad} to your library.`);
})

//Server Start
app.listen(PORT, () => {
    console.log(`App starts on port ${PORT}`)
})