const express = require('express');
const app = express();
const morgan = require('morgan');

const thingRouter = require('./routes/thingRouter')

const PORT = 4224

//Middleware
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/shoes', thingRouter)

//Error Handling
app.use((err, req, res, next) => {
    return res.send({errMsg:err.message})
})

//Server Start
app.listen(PORT, () => {
    console.log(`App starts on port ${PORT}`)
})