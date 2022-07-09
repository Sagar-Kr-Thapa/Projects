const express = require('express')
const router = express.Router()
const 
{
    getTasks,
    createTasks,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask 
} = require('../controllers/tasks')


router.route('/').get(getTasks).post(createTasks)
router.route('/:id').get(getSingleTask).patch(updateSingleTask).delete(deleteSingleTask)

module.exports = router 