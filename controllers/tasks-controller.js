const Task = require('../models/tasks-model');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../errors/custom-error');

const TaskModel = new Task();

const getAllTasks = asyncWrapper(async (req, res) => {
    const result = await TaskModel.getAllTasks();
    res.status(200).json({
        status: 200,
        body: {
            tasks: {
                result
            }
        }
    })
})

const getTaskbyId = asyncWrapper(async (req, res, next) => {
    const id = parseInt(req.params.id)
        results = await TaskModel.getTaskbyId(id);
        if(results.length === 0){
            return next(createCustomError(`No task with id : ${id}`, 404))
        }
        res.status(201).json({
            status: 201,
            body: {
                task: {
                    results
                    }
                }
            })
})

const createTask = asyncWrapper(async (req, res) => {
    const {title, description} = req.body;
        results = await TaskModel.createTask(title, description);
        if(results.length === 0){
            return next(createCustomError(`Error`, 404))
        } 
        res.status(201).json({
            status: 201,
            body: {
                task: results
            }
        })
})

const updateTask = asyncWrapper(async (req, res, next) => {
    const id = parseInt(req.params.id)
    const {title, description} = req.body;
    results = await TaskModel.updateTask(id, title, description);
    if(results.length === 0){
        return next(createCustomError(`No task with id : ${id}`, 404))
    } 
    res.status(201).json({
        status: 201,
        body: {
            task: results
        }
    })
})

const deleteTask = asyncWrapper(async (req, res, next) => {
const id = parseInt(req.params.id)
        results = await TaskModel.deleteTask(id);
        if(results.length === 0){
            return next(createCustomError(`No task with id : ${id}`, 404))
        } 
        res.status(200).json({
            status: 200,
            body: {
                task: "Task deleted successfully"
            }
        })
})

module.exports = {
    getAllTasks,
    createTask,
    getTaskbyId,
    updateTask,
    deleteTask
}