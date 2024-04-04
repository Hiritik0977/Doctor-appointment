const httpStatus = require("http-status");
const appointmentService = require("../services/appointment.service");
const catchAsync = require("../utils/catchAsync");

const createAppointment = catchAsync(async (req, res) => {
  const appointment = await appointmentService.createAppointment(req.body);
  res.status(httpStatus.CREATED).send(appointment);
});

const getAppointment = catchAsync(async (req, res) => {
  const appointment = await appointmentService.getAppointment();
  res.status(httpStatus.OK).send(appointment);
});

const getAppointmentByPatient = catchAsync(async (req, res) => {
  const patientId = req.params.id;
  const appointment = await appointmentService.getAppointmentByPatient(patientId);
  res.status(httpStatus.OK).send(appointment);
});

const getAppointmentByDocter = catchAsync(async (req, res) => {
  const doctorId = req.params.id;
  const appointment = await appointmentService.getAppointmentByDocter(doctorId);
  res.status(httpStatus.OK).send(appointment);
});

const updateAppointment = catchAsync(async (req, res) => {
  const appointment = await appointmentService.updateAppointment(req.body);
  res.status(httpStatus.CREATED).send(appointment);
});

const cancelAppointment = catchAsync(async (req, res) => {
  const appointment = await appointmentService.cancelAppointment(req.params);
  res.status(httpStatus.OK).send(appointment);
});

module.exports = {
  createAppointment,
  getAppointment,
  getAppointmentByPatient,
  getAppointmentByDocter,
  updateAppointment,
  cancelAppointment,
};
