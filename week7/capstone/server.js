const express = require('express');
const app = express();
const morgan = require('morgan');
var cors = require('cors')
app.use(cors())

//Routes Here
const movieRouter = require('./routes/movieRouter');
const cartoonRouter = require('./routes/cartoonRouter');
const animeRouter = require('./routes/animeRouter');

const PORT = 4000

//Middleware
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/movies', movieRouter);
app.use('/cartoons', cartoonRouter);
app.use('/anime', animeRouter);

//Error Handling
app.use((err, req, res, next) => {
    return res.status(500).send({errMsg: err.message})
});

//Server Start
app.listen(PORT, () => {
    console.log(`App starts on port ${PORT}.`)
});