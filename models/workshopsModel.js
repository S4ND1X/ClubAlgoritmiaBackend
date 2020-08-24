// Import moongose to export the model base on schema
const mongoose = require("mongoose");

//Schema of a workshop, youy can cahnge this to request a different DB
const WorkshopSchema = mongoose.Schema({
  level: String,
  name: String,
  instructor: String,
  date: Date,
  description: String,
  link: String,
  image: String,
});

//Export the model based on schema
module.exports = mongoose.model("prueba 1", WorkshopSchema, "workshops");
