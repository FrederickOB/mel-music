const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");
const User = require("../models/userModel");

const getTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.find({ user: req.user.id });
  res.status(200).json({ status: "sucessful", data: todo });
});

const postTodo = asyncHandler(async (req, res) => {
  if (!req.body.todo) {
    res.status(400);
    throw new Error("Please input todo");
  }
  const todo = await Todo.create({
    todo: req.body.todo,
    user: req.user.id,
    completed: false,
  });
  res.status(200).json({ status: "sucessful", data: todo });
});

const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("todo does not exist");
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }

  if (todo.user.toString() !== user.id) {
    res.status(400);
    throw new Error("user not authorised");
  }

  const todoUpdated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ status: "update sucessful", data: todoUpdated });
});

const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("todo does not exist");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }

  if (todo.user.toString() !== user.id) {
    res.status(400);
    throw new Error("user not authorized");
  }

  await Todo.findByIdAndRemove(req.params.id);
  res.status(200).json({ status: "successful", message: `${req.params.id}` });
});

module.exports = { getTodo, postTodo, updateTodo, deleteTodo };
 