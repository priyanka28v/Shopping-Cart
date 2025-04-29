const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ShopingDB");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};
module.exports = connectDB;
