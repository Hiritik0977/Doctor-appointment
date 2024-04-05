const Docter = require("../models/docter");
const Appointment = require("../models/appoinment");

const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

const createAppointment = async (appointmentData) => {
  try {
    const appointment = new Appointment(appointmentData);
    await appointment.save();
    return appointment;
  } catch (error) {
    throw new Error("Error creating appointment: " + error.message);
  }
};

const getAppointment = async () => {
  let docter = Docter.find().populate("user");
  if (Docter) {
    return docter;
  } else {
    throw new ApiError(httpStatus.NOT_FOUND, "No Docter Found");
  }
};
const getAppointmentByPatient = async (patientId) => {
  try {
    const appointments = await Appointment.find({ patient: patientId })
      .populate({
        path: "patient",
        populate: { path: "user", select: "firstName lastName" },
      })
      .populate({
        path: "docter",
        populate: { path: "user", select: "firstName lastName" },
      })
      .select("date time patient doctor");

    if (!appointments.length) {
      throw new Error("No appointments found for this patient.");
    }

    return appointments;
  } catch (error) {
    throw new Error(`Error fetching appointments: ${error.message}`);
  }
};

const getAppointmentByDocter = async (doctorId) => {
  try {
    const appointments = await Appointment.find({ docter: doctorId })
      .populate({
        path: "docter",
        populate: { path: "user", select: "firstName lastName" },
      })
      .populate({
        path: "patient",
        populate: { path: "user", select: "firstName lastName" },
      })
      .select("date time");
    if (!appointments.length) {
      throw new Error("No appointments found for this doctor.");
    }

    return appointments;
  } catch (error) {
    throw new Error(`Error fetching appointments: ${error.message}`);
  }
};

const updateAppointment = async (appointmentId, updatedData) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      updatedData,
      { new: true }
    );
    if (!appointment) {
      throw new Error("Appointment not found");
    }
    return appointment;
  } catch (error) {
    throw new Error("Error updating appointment: " + error.message);
  }
};

const deleteAppointment = async (appointmentId) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(appointmentId);
    if (!appointment) {
      throw new Error("Appointment not found");
    }
    return appointment;
  } catch (error) {
    throw new Error("Error deleting appointment: " + error.message);
  }
};

module.exports = {
  createAppointment,
  getAppointment,
  getAppointmentByPatient,
  getAppointmentByDocter,
  updateAppointment,
  deleteAppointment,
};
