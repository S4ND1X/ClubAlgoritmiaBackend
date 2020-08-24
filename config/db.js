// Import Mongo OMR
const mongoose = require("mongoose");
// Using doten to read .env
require("dotenv").config({ path: "variables.env" });

// Connecting to DB
const connectDB = async () => {
  try {
    //connection to given url and with certain configuration
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("====================================");
    console.log("DB Connected");
    console.log("====================================");
  } catch (error) {
    console.log("====================================");
    console.log("DB ERROR");
    console.log("====================================");
    console.log(error);
    process.exit(1);
  }
};

// Exporting connection
module.exports = connectDB;
