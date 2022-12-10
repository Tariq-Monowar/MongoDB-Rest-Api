const express = require('express')
require('../db/connect')
const cors = require('cors')
const userRouter = require('../routes/routes')
const app = express()
app.use(express.json())
app.use(cors())

app.use(userRouter)

module.exports = app