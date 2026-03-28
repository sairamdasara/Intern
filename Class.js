const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  className: String,
  section: String,
  teacherId: String
});

module.exports = mongoose.model("Class", classSchema);
