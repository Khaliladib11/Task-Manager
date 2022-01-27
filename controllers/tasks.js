
const db = require('../config/database');



const getAllTasks = (req, res, next) => {
    db.query('SELECT * FROM TASKS', (err, response) => {
        if(err){
            return next(err)
        }
        res.status(200).send(response.rows)
    })
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}