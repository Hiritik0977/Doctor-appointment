const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const httpStatus = require("http-status");
const User = require("../models/user");
const Role = require("../models/role");
const ApiError = require("../utils/ApiError");
const Doctor = require("../models/docter");

const sendOTPEmail = (email, OTP) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Password Reset OTP",
    text: `Your OTP (It is expired after 1 min): ${OTP}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const signup = async (userBody) => {
  const existingUser = await getUserByEmail(userBody.email);
  if (existingUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email Already Exist");
  }

  const newUser = new User(userBody);
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  await newUser.save();
  return newUser;
};

const signin = async (userBody) => {
  const user = await getUserByEmail(userBody.email);
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email does not Exist");
  }

  const validPassword = await bcrypt.compare(userBody.password, user.password);
  if (!validPassword)
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password does not match");

  const role = await Role.findById(user.role);
  const token = jwt.sign({ _id: user._id }, process.env.SECRET);
  
  return { message: "Login Successful", token, role: role.role };
};

const forgetPassword = async (requestedData) => {
  const { email } = requestedData;
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError("User not exist", httpStatus.BAD_REQUEST);
  }

  const OTP = Math.floor(100000 + Math.random() * 900000);
  user.resetPasswordOTP = OTP;
  user.resetPasswordExpires = Date.now() + 60000;
  await user.save();

  sendOTPEmail(user.email, OTP);
};

const resetPassword = async (requestedData) => {
  const { password, confirmPassword, otp } = requestedData;
  if (!password || !confirmPassword || !otp) {
    throw new ApiError("Form data not found", httpStatus.BAD_REQUEST);
  }

  if (password !== confirmPassword) {
    throw new ApiError("Passwords do not match", httpStatus.BAD_REQUEST);
  }

  try {
    const user = await User.findOne({
      resetPasswordOTP: otp,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user) {
      throw new ApiError("Invalid or expired OTP", httpStatus.BAD_REQUEST);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user.password = hashedPassword;
    user.resetPasswordOTP = null;
    user.resetPasswordExpires = null;
    
    await user.save();
  } catch (error) {
    throw new ApiError(error.message, httpStatus.INTERNAL_SERVER_ERROR);
  }
};

const toggleDoctorStatus = async (doctorId) => {
  const doctor = await Doctor.findById(doctorId);
  if (!doctor) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Doctor not found');
  }

  doctor.isApproved = !doctor.isApproved;
  await doctor.save();
  
  return { message: 'Doctor status updated successfully', isApproved: doctor.isApproved };
};

module.exports = { signup, signin, forgetPassword, resetPassword, toggleDoctorStatus };
