const express = require("express");
const app = express();
const mongoose = require("mongoose");
const taskRouter = require("./routes/task");

mongoose.connect("mongodb://localhost/todo", () => {
  console.log("db connetion successfull.");
});

app.use((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  req.next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
  res.end();
});

app.use("/task", taskRouter);

module.exports = app;
