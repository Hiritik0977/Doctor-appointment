const express = require("express");
const roleController = require("../controllers/role.controller");
const verifyToken = require("../middleware/auth");
const Validator = require("../middleware/validate");

const router = express.Router();

router.route("/").post(roleController.addRole);
router.route("/").get(roleController.getRole);
router.route("/:id").delete(roleController.deleteRole);

module.exports = router;
