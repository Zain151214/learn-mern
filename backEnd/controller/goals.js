const asyncHandler = require("express-async-handler");

const createGoal = asyncHandler(async (req, res) => {
    const goal = await req.body;
    console.log(goal);
    res.status(201).json({ message: "Goal Created" })
})

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get Goals" });
})

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Goal Updated of id ${req.params.id}` })

})

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Goal Delated of id ${req.params.id}` })
})


module.exports = { getGoals, createGoal, updateGoal, deleteGoal }