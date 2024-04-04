const mongoose = require("mongoose");
const docterSchema = new mongoose.Schema(
  {
   
 
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    specialization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Specialization",
      required: true,
    },
     isApproved: {
      type: Boolean,
      default: false,
    },

  },

  { timestamps: true }
);

module.exports = mongoose.model("Docter", docterSchema);
