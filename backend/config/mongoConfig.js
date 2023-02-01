const mogoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mogoose.connect(process.env.MONGO_SERVER);
    console.log(
      `mongo db conected to: ${conn.connection.host}`.green.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
