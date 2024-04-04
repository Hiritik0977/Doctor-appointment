const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'cancelled'],
    default: 'pending',
  },
  method: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Payment", paymentSchema);
