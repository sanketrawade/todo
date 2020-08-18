const mongoose = require("mongoose");

const TaskScheema = mongoose.Schema({
 Title: { type: String, require: true },
 IsCompleted: { type: Boolean , require: true }
});

module.exports = mongoose.model("Task", TaskScheema);
