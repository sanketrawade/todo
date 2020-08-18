const mongoose = require("mongoose");
const express = require("express");
const taskController = require("../controllers/task");

const router = express.Router();


router.get("/api/gttsk",taskController.GetTask)
router.post("/api/gttkbtid",taskController.GetTaskById)
router.post("/api/adtsk",taskController.AddTask)
router.post("/api/deltsk",taskController.DeleteTask)
router.post("/api/chngstus",taskController.ChangeStatus)

module.exports = router;