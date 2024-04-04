const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    medicalHistory: {
      type: String,
      required: true,
    },
    disease: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Disease",
      required: true,
    }],
    medications: [
      {
        name: String,
        dosage: String,
        frequency: String,
      },
    ],
    currentHealthStatus: {
      type: String,
      enum: ["Stable", "Serious", "Critical"],
      default: "Stable",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
