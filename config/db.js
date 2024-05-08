const mongoose = require("mongoose");

const connectDB = async () => {
  return mongoose
    .connect("mongodb+srv://Sourav:sourav15446@cluster0.jvgvdvv.mongodb.net/ContactDetail?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log(`connection to database established...`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
