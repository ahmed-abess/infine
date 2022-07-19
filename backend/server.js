const express = require('express')
//const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

const indexRouter=require("./routes/index")

const app = express()
const apiPort = 4000
app.use(express.json());

//app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
//app.use(bodyParser.json())

db()


app.use('/rpn', indexRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))