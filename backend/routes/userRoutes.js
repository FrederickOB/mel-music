const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userControllers");

const { protect } = require("../middleware/authMiddleware");

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router.get("/me", protect, getUser);

module.exports = router;
