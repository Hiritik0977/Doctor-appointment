const express = require("express");
const userRoute = require("./user.route");
const patientRoute = require("./patient.route");
const uploadRoute = require("./fileupload.route");
const docterRoute = require("./docter.route");
const roleRoute = require("./role.route");
const appointmentRoute = require("./appointment.route");

const router = express.Router();

// Define routes with their respective paths
const routes = [
  { path: "/users", route: userRoute },
  { path: "/patient", route: patientRoute },
  { path: "/upload", route: uploadRoute},
  { path: "/docter", route: docterRoute },
  { path: "/role", route: roleRoute },
  { path: "/appointment", route: appointmentRoute },
];

// Register routes
routes.forEach(({ path, route }) => {
  router.use(path, route);
});

module.exports = router;
