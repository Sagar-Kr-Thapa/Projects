
const getTasks = (req,res)=>{
    res.send('all items from the file')
}

const createTasks = (req,res)=>{
    res.json(req.body)
}

const getSingleTask = (req,res)=>{
    res.json({id:req.params.id})
}

const updateSingleTask = (req,res)=>{
    res.send('update single task')
}

const deleteSingleTask = (req,res)=>{
    res.send('delete single task')
}

module.exports = {
    getTasks,
    createTasks,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask,
}