const Task=require('../models/Task')

const getTasks = async(req,res)=>{
    const task = await Task.find({})
    res.status(200).json({task})
}

const createTasks = async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
}
const getSingleTask = async (req,res)=>{
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
        return res.status(404).json({msg:`Task with id:${taskID}} not found`})
    }
    res.status(200).json({task})
}

const updateSingleTask = async (req,res)=>{
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
        new:true,
        runValidators:true,
    })
    if(!task){
        return res.status(404).json({msg:`Task with id:${taskID}} not found`})
    }
    res.status(200).json({task})
}

const deleteSingleTask = async (req,res)=>{
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if(!task){
        return res.status(404).json({msg:`Task with id:${taskID}} not found`})
    }
    res.status(200).json({task})   
}

module.exports = {
    getTasks,
    createTasks,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask,
}