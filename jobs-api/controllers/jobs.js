const getAllJobs = async (req,res) => {
    res.send('all jobs');
}

const getJob = async (req,res) => {
    res.send('single job');
}
const createJob = async (req,res) => {
    res.json(req.user);
}
const UpdateJob = async (req,res) => {
    res.send('Update job');
}
const deleteJob = async (req,res) => {
    res.send('delete job');
}

module.exports = {
    getAllJobs,
    getJob, 
    createJob,
    UpdateJob,
    deleteJob,
}