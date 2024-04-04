const httpStatus = require("http-status");
const roleService = require("../services/role.service");
const catchAsync = require("../utils/catchAsync");

const addRole = catchAsync(async (req, res) => {
  const role = await roleService.addRole(req.body);
  res.status(httpStatus.CREATED).send(role);
});

const getRole = catchAsync(async (req, res) => {
  const roles = await role.getRole();
  res.status(httpStatus.OK).send(roles);
});

const deleteRole = catchAsync(async (req, res) => {
  const role = await roleService.deletePatient(req.params);
  res.status(httpStatus.OK).send(role);
});

module.exports = {
  addRole,
  getRole,
  deleteRole,
};
