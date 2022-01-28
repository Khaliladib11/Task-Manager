
const Task = require('../models/tasks-model');

const TaskModel = new Task();

const getAllTasks = async (req, res, next) => {

    try{
        const result = await TaskModel.getAllTasks();
        res.status(200).json({
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

const getTaskbyId = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id)
        results = await TaskModel.getTaskbyId(id);
        if(results.length === 0){
            res.status(404).json({
                status: 404,
                msg: `No task with ID : ${id}`
                })
        }
        res.status(201).json({
            status: 201,
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

const createTask = async (req, res, next) => {
    try{
        const {title, description} = req.body;
        results = await TaskModel.createTask(title, description);
        if(results.length === 0){
            res.status(500).json({
                status: 500,
                msg: "Task not created"
            })
        } 
        else{
            res.status(201).json({
                status: 201,
                body: {
                    task: results
                }
            })
        }
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
        if(results.length === 0){
            res.status(500).json({
                status: 500,
                msg: "Task not updated"
            })
        } 
        else{
            res.status(201).json({
                status: 201,
                body: {
                    task: results
                }
            })
        }
    
    }catch(error){
        res.status(500).json({msg: error})
        next(error);
    }
}

const deleteTask = async (req, res, next) => {
    try{
        const id = parseInt(req.params.id)
        results = await TaskModel.deleteTask(id);
        if(results.length === 0){
            res.status(500).json({
                status: 500,
                msg: `No task with id : ${id}`
            })
        } 
        else{
            res.status(200).json({
                status: 200,
                body: {
                    task: "Task deleted successfully"
                }
            })
        }
    }catch(error){
        res.status(500).json({msg: error})
        next(error);
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTaskbyId,
    updateTask,
    deleteTask
}