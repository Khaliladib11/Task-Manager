
const Task = require('../models/tasks-model');

const TaskModel = new Task();

const getAllTasks = async (req, res, next) => {

    try{
        const result = await TaskModel.getAllTasks();
        res.status(200).send({
            status: 200,
            body: {
                tasks: {
                    result
                }
            }
        })
    }catch(error){
        res.status(500).json({msg: error})
        next(error);
    }
}

const createTask = async (req, res, next) => {
    const {title, description} = req.body;
    try{
        results = await TaskModel.createTask(title, description);
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
    try{
        const id = parseInt(req.params.id)
        results = await TaskModel.getTaskbyId(id);
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
        results = await TaskModel.updateTask(id, title, description);
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
        results = await TaskModel.deleteTask(id);
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