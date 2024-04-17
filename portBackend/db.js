const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

function ConnectDb() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
}

module.exports = ConnectDb;
