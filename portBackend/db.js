const mongoose = require("mongoose");

function ConnectDb() {
  mongoose
    .connect(
      "mongodb+srv://yaseenseen9:BuquJ6Gs7mN75d2c@cluster0.lakmeuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
}

module.exports = ConnectDb;
