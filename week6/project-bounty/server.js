const express = require('express');
const app = express();
const morgan = require('morgan');
//const { v4: uuidv4} = require('uuid');

const bountyRouter = require('./routes/bountyRouter');
const killRouter = require('./routes/killRouter')

const PORT = 3030

//Middleware
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/open-bounties', bountyRouter)
app.use('/my-kills', killRouter)

//Error Handling
app.use((err, req, res, next) => {
    //console.log(err)
    return res.send({errMsg: err.message})
})

//Server Start
app.listen(PORT, () => {
    console.log(`App starts on port ${PORT}`)
})