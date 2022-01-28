
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
        res.status(500).json({msg: error})
        next(error);
    }
}

const getTask = async (req, res, next) => {
    //console.log(typeof(id))
    //res.json({id:req.params.id})
    try{
        const id = parseInt(req.params.id)
        const task = new Task();
        results = await task.getTaskbyId(id);
        res.status(201).send({
            status: 200,
            body: {
                task: {
                    results
                }
            }
        })
    }catch(error){
        res.status(500).json({msg: error})
        next(error);
    }
}

const updateTask = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id)
        const {title, description} = req.body;
        const task = new Task(title, description);
        results = await task.updateTask(id);
        res.status(201).send({
            status: 200,
            body: {
                task: {
                    results
                }
            }
        })
    }catch(error){
        res.status(500).json({msg: error})
        next(error);
    }
}

const deleteTask = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id)
        const task = new Task();
        results = await task.deleteTask(id);
        res.status(201).send({
            status: 200,
            body: {
                task: {
                    results
                }
            }
        })
    }catch(error){
        res.status(500).json({msg: error})
        next(error);
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}