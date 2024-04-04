const httpStatus = require("http-status");
const docterService = require("../services/docter.service");
const catchAsync = require("../utils/catchAsync");

const addDocter = catchAsync(async (req, res) => {
  const docter = await docterService.addDocter(req.body);
  res.status(httpStatus.CREATED).send({
    message: "Doctor added successfully",
    docter
  });
});
 /* this is for client */
const getDocter = catchAsync(async (req, res) => {
  const docter = await docterService.getDocter();
  res.status(httpStatus.OK).send({
    message: "Doctor list retrieved successfully",
    docter
  });
});

/* this for admin */
const fetchAllDocter = catchAsync(async (req, res) => {
  const docter = await docterService.fetchAllDocter();
  res.status(httpStatus.OK).send({
    message: "Doctor list retrieved successfully",
    docter
  });
});

const getDoctorByIdController = catchAsync(async (req, res) => {
  const doctor = await docterService.getDocterById(req.params.id);
  res.status(httpStatus.OK).send({
    message: "Doctor details retrieved successfully",
    doctor
  });
});

const updateDocter = catchAsync(async (req, res) => {
  const docter = await docterService.updateDocter(req.body);
  res.status(httpStatus.OK).send({
    message: "Doctor updated successfully",
    docter
  });
});

const deleteDocter = catchAsync(async (req, res) => {
  const docter = await docterService.deletePatient(req.params);
  res.status(httpStatus.OK).send({
    message: "Doctor deleted successfully",
    docter
  });
});

module.exports = {
  addDocter,
  getDocter,
  getDoctorByIdController,
  updateDocter,
  deleteDocter,
  fetchAllDocter
};
