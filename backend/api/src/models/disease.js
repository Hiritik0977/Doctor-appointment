const mongoose = require("mongoose");

const diseaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },

  specialization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Specialization",
    required: false,
  },
});

module.exports = mongoose.model("Disease", diseaseSchema);
