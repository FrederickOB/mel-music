const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, othernames, email, password, phoneNumber } =
    req.body;

  if (!firstname || !lastname || !email || !password || !phoneNumber) {
    res.status(400);
    throw new Error("please fill in all required fields");
  }

  //check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }

  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user

  const user = await User.create({
    firstname,
    lastname,
    othernames,
    email,
    phoneNumber,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      status: "successful",
      data: {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        othernames: user.othernames,
        email: user.email,
        phoneNumber: user.phoneNumber,
      },
      token: generateJWT(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({
    $or: [{ email: username }, { phoneNumber: username }],
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      status: "successful",
      data: {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        othernames: user.othernames,
        email: user.email,
        phoneNumber: user.phoneNumber,
      },
      token: generateJWT(user._id),
    });
  } else if (!user) {
    res.status(400);
    throw new Error("user does not exists");
  } else {
    res.status(400);
    throw new Error("wrong password");
  }
  res.json({ message: "login user" });
});
const getUser = asyncHandler(async (req, res) => {
  const {
    id: _id,
    firstname,
    lastname,
    othernames,
    email,
    phoneNumber,
  } = await User.findById(req.user.id);

  res
    .status(200)
    .json({ _id, firstname, lastname, othernames, email, phoneNumber });
});

//generate JWT
const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "10d" });
};

module.exports = { registerUser, loginUser, getUser };
