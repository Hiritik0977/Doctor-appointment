const httpStatus = require("http-status");
const userService = require("../services/user.service");
const catchAsync = require("../utils/catchAsync");

const signup = catchAsync(async (req, res) => {
  const reqUser = req.body;
  const user = await userService.createUser(reqUser);
  res.status(httpStatus.CREATED).send(user);
});

const signin = catchAsync(async (req, res) => {
  const user = await userService.signin(req.body);
  res.status(httpStatus.CREATED).send(user);
});
const forgetPassword = catchAsync(async (req, res) => {
  const user = await userService.forgetPassword(req.body);
  res.status(httpStatus.CREATED).send({ message: "Otp send to registed email"});
});
const resetPassword = catchAsync(async (req, res) => {
  const user = await userService.resetPassword(req.body);
  res.status(httpStatus.CREATED).send({ message: "Password updated succesfully"});
});
const toggleDoctorStatus = catchAsync(async (req, res) => {
  const { doctorId } = req.params;
  const result = await userService.toggleDoctorStatus(doctorId);
  res.status(httpStatus.OK).send(result);
});

module.exports = {
  signup,
  signin,
  forgetPassword,
  resetPassword,
  toggleDoctorStatus,
};
