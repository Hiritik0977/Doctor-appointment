const mongoose = require("mongoose");

const doctorqualification = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  todate: {
    type: Date,
    required: true,
  },
  fromdate: {
    type: Date,
    required: true,
  },
  school: {
    type: String,
  },
  doctor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Docter",
      required: true,
    },
  ],
});

const doctorexperience = new mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
  todate: {
    type: Date,
    required: true,
  },
  fromdate: {
    type: Date,
    required: true,
  },
  workedAt: {
    type: String,
    required: true,
  },

  doctor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Docter",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Doctorqualification", doctorqualification);
module.exports = mongoose.model("Doctorexperience", doctorexperience);
