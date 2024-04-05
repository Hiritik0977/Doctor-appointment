const express = require("express");
const docterController = require("../controllers/docter.controller");
const verifyToken = require("../middleware/auth");
const Validator = require("../middleware/validate");

const router = express.Router();

router.route("/").post(docterController.addDocter);
router.route("/").get(docterController.getDocter);
router.route("/all").get(docterController.fetchAllDocter);
router.route("/:id").get(docterController.getDoctorByIdController);
router.route("/:id").put(docterController.updateDocter);
router.route("/:id").delete(docterController.deleteDocter);


module.exports = router;
