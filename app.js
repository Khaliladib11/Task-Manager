const express = require('express')

const app = express()

const tasks = require('./routes/tasks')


require('dotenv').config()


// middleware
app.use(express.json())

// routes
app.get('/hello', (req, res) => {
    res.send("The Task Manager app")
})

app.use('/api/v1/tasks', tasks)




const port = process.env.PORT || 3000;

app.listen(port, console.log(`Server is listening on port ${port}...`))