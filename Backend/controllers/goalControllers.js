const expressAsyncHandler = require("express-async-handler")


// GET
const getGoal = expressAsyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get using controller'})
})

// POST
const setGoal = expressAsyncHandler( async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Error! Please add some text!!')
    }
    res.status(200).json({message: 'Set using controller'})
})

// PUT
const updateGoal = expressAsyncHandler(async (req, res) => {
    res.status(200).json({message: `Update using controller ${req.params.id}`})
})

// DELETE
const deletGoal = expressAsyncHandler(async (req, res) => {
    res.status(200).json({message:  `Delete using controller ${req.params.id}`})
})

module.exports = {
    getGoal,
    updateGoal,
    setGoal,
    deletGoal,
}