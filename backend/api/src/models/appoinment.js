const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  docter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Docter',
    required: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  payment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payment',
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
