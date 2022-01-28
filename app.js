const express = require('express')
const app = express()
const tasks = require('./routes/tasks-router')
require('dotenv').config()

const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

app.listen(port, console.log(`Server is listening on port ${port}...`))