const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  data: { type: Array, required: true }, // Parsed Excel data
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Upload", uploadSchema);