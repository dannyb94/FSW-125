const express = require('express');
const app = express();
const morgan = require('morgan');

const toDoRouter = require('./routes/toDoRouter');

const PORT = 3060

//Middleware
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/to-do-list', toDoRouter)

//Server Start
app.listen(PORT, () => {
    console.log(`App starts on port ${PORT}`)
})