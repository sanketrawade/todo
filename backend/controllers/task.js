const mongoose = require("mongoose");
const express = require("express");
const Task = require("../models/task");

exports.GetTask = (req, res) => {
  Task.find((error, result) => {
    if (error == null) {
      res.status(200).json({ data: result });
    }
    else {
      res.status(500).json(error);
    }
    res.end();
  })
}

exports.AddTask = (req, res) => {
  const taskname = req.body.Title;
  const task = new Task({
    Title: taskname,
    IsCompleted: false
  });
  task.save().then((result) => {
    res.status(200).json({ data: result, msg: 'task added.' });
  }).catch((err) => {
    res.status(500).json({ error: 'something went wrong' });
  })
}


exports.DeleteTask = (req, res) => {
  const id = req.body.Id;
  Task.deleteOne({ _id: id }).then((result) => {
    res.status(200).json({ msg: 'task deleted.' })
  }).catch((error) => {
    res.status(404).json({ error: 'not found task' })
  });
}

exports.GetTaskById = (req, res) => {
  let name = req.body.name;
  Task.find({ Title: name }, (error, result) => {
    if (error == null) {
      res.status(200).json({ data: result });
    }
    else {
      res.status(500).json(error);
    }
    res.end();
  })
}

exports.ChangeStatus = (req, res) => {
  const task = req.body;
  Task.updateOne({ _id: task._id }, task, (error, result) => {
    if (error == null) {
      res.status(200).json({ msg: 'status changed..' })
    } else {
      res.status(400).json({ error: 'error occured..' + error })
    }
  });
}


