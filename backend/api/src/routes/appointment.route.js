const express = require("express");
const appointmentController = require("../controllers/appointment.controller");
const verifyToken = require("../middleware/auth");
const Validator = require("../middleware/validate");

const router = express.Router();

router.route("/").post(appointmentController.createAppointment);
router.route("/").get(appointmentController.getAppointment);
router.route("/docter/:id").get(appointmentController.getAppointmentByDocter);
router.route("/patient/:id").get(appointmentController.getAppointmentByPatient);
router.route("/:id").put(appointmentController.updateAppointment);
router.route("/:id").delete(appointmentController.cancelAppointment);

module.exports = router;
