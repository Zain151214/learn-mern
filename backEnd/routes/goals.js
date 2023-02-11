const express = require("express");
const { goalContoller } = require("../controller");
const router = express.Router();

// if we have same route(path) then we use this short syntax.

// for all the same route in my case it is for get and post
// router.route("/").get(goalContoller.getGoals).post(goalContoller.createGoal);

// for put and delete
// router.route("/:id").put(goalContoller.updateGoal).delete(goalContoller.deleteGoal);



router.post("/", goalContoller.createGoal);

router.get("/", goalContoller.getGoals);

router.put("/:id", goalContoller.updateGoal);

router.delete("/:id", goalContoller.deleteGoal);

module.exports = router;