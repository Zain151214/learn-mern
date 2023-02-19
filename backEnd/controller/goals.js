const asyncHandler = require("express-async-handler");
const { Goal } = require("../model");


// @desciption: Create a new Goal
// @route: Post-/api/goals
// @access: Private
const createGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.create(req.body);
    res.status(201).json(goal)
})

// @desciption: Get all Goals
// @route: Get-/api/goals
// @access: Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
})

// @desciption: Create a new Goal
// @route: Put-/api/goals:id
// @access: Private
const updateGoal = asyncHandler(async (req, res) => {
    const _id = req.params.id;
    const goal = await Goal.findByIdAndUpdate(_id, req.body, { new: true })
    res.status(200).json(goal)

})

// @desciption: Create a new Goal
// @route: Delete-/api/goals:id
// @access: Private
const deleteGoal = asyncHandler(async (req, res) => {
    const _id = req.params.id;
    const goal = await Goal.findByIdAndDelete(_id);
    res.status(200).json({ message: `Goal Delated of id ${req.params.id}` })
})


module.exports = { getGoals, createGoal, updateGoal, deleteGoal }