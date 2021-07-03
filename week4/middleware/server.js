const express = require('express');
const app = express();
//const { v4: uuidv4} = require('uuid');

const bountyRouter = require('./routes/bountyRouter');
const killRouter = require('./routes/killRouter')

const PORT = 3030

//Middleware
app.use(express.json())

//Routes
app.use('/open-bounties', bountyRouter)
app.use('/my-kills', killRouter)

//Server Start
app.listen(PORT, () => {
    console.log(`App starts on port ${PORT}`)
})