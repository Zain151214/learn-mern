
const createGoal = (req, res) => {
    res.status(201).json({ message: "Goal Created" })
}

const getGoals = (req, res) => {
    res.status(200).json({ message: "Get Goals" });
}

const updateGoal = (req, res) => {
    res.status(200).json({ message: `Goal Updated of id ${req.params.id}` })

}

const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Goal Delated of id ${req.params.id}` })
}


module.exports = { getGoals, createGoal, updateGoal, deleteGoal }