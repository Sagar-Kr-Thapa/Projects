const Task=require('../models/Task')
const {createCustomError} = require('../errors/custom-error')
const asyncWrapper = require('../middleware/async')

const getTasks = asyncWrapper(async(req,res)=>{
    const task = await Task.find({})
    res.status(200).json({task})
})

const createTasks = asyncWrapper(async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
})

const getSingleTask = asyncWrapper(async (req,res,next)=>{
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
        const err = createCustomError(`Task with id:${taskID}} not found`,404)
        return next(err)
    }
    res.status(200).json({task})
})

const updateSingleTask = asyncWrapper(async (req,res,next)=>{
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
        new:true,
        runValidators:true,
    })
    if(!task){
        const err = createCustomError(`Task with id:${taskID}} not found`,404)
        return next(err)   
    }
    res.status(200).json({task})
})

const deleteSingleTask = asyncWrapper(async (req,res,next)=>{
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if(!task){
        const err = createCustomError(`Task with id:${taskID}} not found`,404)
        return next(err)       
    }
    res.status(200).json({task})   
})

module.exports = {
    getTasks,
    createTasks,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask,
}