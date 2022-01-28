
const db = require('../config/database');
const Task = require('../models/task');

const getAllTasks = async (req, res, next) => {

    try{
        const result = await Task.getAllTasks();
        res.status(200).send({
            status: 200,
            body: {
                tasks: {
                    result
                }
            }
        })
    }catch(error){
        next(error);
    }
}

const createTask = async (req, res, next) => {
    const {title, description} = req.body;
    console.log(title, description)
    try{
        const task = new Task(title, description);
        results = await task.createTask();
        res.status(201).send({
            status: 200,
            body: {
                task: {title, description}
            }
        })
    }catch(error){
        next(error);
    }
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