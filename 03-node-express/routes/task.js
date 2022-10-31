const express = require("express");
const router = express.Router();

// import functions from 'controllers'
const { getAllTask, getTask, createTask, updateTask, deleteTask } = require("../controllers/task");

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;