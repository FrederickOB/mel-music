const express = require("express");
const router = express.Router();
const {
  getTodo,
  postTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoControllers");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTodo).post(protect, postTodo);
router.route("/:id").put(protect, updateTodo).delete(protect, deleteTodo);

module.exports = router;
