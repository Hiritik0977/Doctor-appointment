const Role = require("../models/role");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

const addRole = async (roleBody) => {
  try {
    const existingRole = await Role.findOne({ role: roleBody.role });
    if (existingRole) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Role already exists");
    }
    const newRole = new Role(roleBody);
    await newRole.save();
    return newRole;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

const getRole = async () => {
  try {
    let role = Role.find();
    if (Docter) {
      return role;
    } else {
      throw new ApiError(httpStatus.NOT_FOUND, "No Role Found");
    }
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

const deleteRole = async (roleId) => {
  try {
    const role = await Role.findById(roleId);
    if (!role) {
      throw new ApiError(httpStatus.NOT_FOUND, "Role not found");
    }
    await role.remove();
    return { message: "Role deleted successfully" };
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};



module.exports = { addRole, getRole, deleteRole };
