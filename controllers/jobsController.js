const createJob = async (req,res) => {
    res.send('create job')
}
const getAllJobs = (req,res) => {
    res.send('get All jobs')
}
const updateJob = (req,res) => {
    res.send('update job')
}
const deleteJob = (req,res) => {
    res.send('Delete job')
}
const showStats = (req,res) => {
    res.send('Show Stats')
}

export { createJob, getAllJobs, updateJob, deleteJob , showStats }