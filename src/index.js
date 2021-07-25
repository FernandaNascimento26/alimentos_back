const express = require('express')
const client = require('@prisma/client')
var cors = require('cors')


const app = express()

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))

require('./controllers/alimentosController')(app)

app.get('/', async (req, res) => {
    res.json("Ola mundo")
})


app.listen(8080)