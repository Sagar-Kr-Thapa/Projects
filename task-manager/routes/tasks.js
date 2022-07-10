const express = require('express')
const router = express.Router()
const 
{
    getTasks,
    createTask,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask 
} = require('../controllers/tasks')


router.route('/').get(getTasks).post(createTask)
router.route('/:id').get(getSingleTask).patch(updateSingleTask).delete(deleteSingleTask)

module.exports = router 