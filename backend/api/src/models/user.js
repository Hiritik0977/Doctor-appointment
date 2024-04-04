const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
     
    },

    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
      
    },
    email: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
   
    images: {
      type: String,
    },
    isSpecial: {
      type: Boolean,
      default: false,
    },
    role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
    resetPasswordOTP: {
      type: Number,
      default: null,
    },
    resetPasswordExpires: {
    type: Date,
    default: null
  },
  password: {
    type:String
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
