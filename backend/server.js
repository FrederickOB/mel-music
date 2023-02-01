const express = require("express");
const colors = require("colors");
const connectDB = require("./config/mongoConfig");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/todo", require("./routes/todoRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`.blue);
});
