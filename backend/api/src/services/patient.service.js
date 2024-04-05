const Patient = require("../models/patient");
const User = require("../models/user");
const Specialization = require("../models/specilaization");
const Role = require("../models/role");
const Disease = require("../models/disease");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const { default: mongoose } = require("mongoose");

/**
 * getPatientById
 * @param(ObjectId) patientId
 * @returns {Promise<Patient>}
 */

const getPatientById = async (patientId) => {
  const { id } = patientId;
  if (!mongoose.Types.ObjectId.isValid(id))
    return new ApiError({ msg: `No task with id :${id}` });
  return await Patient.findById({ _id: id });
};

/**
 * getPatientByEmail
 * @param(email) patientEmail
 * @returns {Promise<Patient>}
 */

const getPatientByEmail = async (patientEmail) => {
  return await Patient.findOne({ email: patientEmail });
};

/** 
*addPatient
*@param(Object) patientBody
* @returns {Promise<Patient>}

*/
const addPatient = async (patientBody) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    contactNo,
    dob,
    gender,
    medicalHistory,
    diseases,
    medications,
    currentHealthStatus,
    images,
    role,
  } = patientBody;

  try {
    // check id the role already exists or not
    let existingRole = await Role.findOne({ role });

    // If role doesn't exist, create it
    if (!existingRole) {
      existingRole = await Role.create({ role });
    }
    console.log(existingRole, "er");
    // Check if the user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "Email already used by another user"
      );
    }

    // Create a new user for the patient
    const newUser = await User.create({
      firstName,
      middleName,
      lastName,
      email,
      contactNo,
      dob,
      gender,
      images,
      role: existingRole._id,
    });

    // Create or find diseases and specializations
    const diseaseIds = await Promise.all(
      diseases.map(async (disease) => {
        const { name, description } = disease;

        // // Find or create the specialization
        // let specializationObj = await Specialization.findOne({
        //   name: specialization,
        // });
        // if (!specializationObj) {
        //   specializationObj = await Specialization.create({
        //     name: specialization,
        //   });
        // }

        // Find or create the disease
        const newDisease = await Disease.findOneAndUpdate(
          { name },
          { name, description },
          { upsert: true, new: true }
        );

        return newDisease._id;
      })
    );

    // Create a new patient record and link it to the user
    const newPatient = await Patient.create({
      user: newUser._id,
      medicalHistory,
      disease: diseaseIds,
      medications,
      currentHealthStatus,
    });

    return newPatient;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

/** 
*getPatient

* @returns {Promise<Patient>}

*/
const getPatient = async () => {
  try {
    const patients = await Patient.find()
      .populate({
        path: "user",
        select:
          "firstName middleName lastName email contactNo dob gender images",
      })
      .populate({
        path: "disease",
        select: "name description",
      });

    if (patients.length === 0) {
      throw new ApiError(httpStatus.NOT_FOUND, "No Patients Found");
    }

    return patients;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

/** 
*updatePatient
@param {ObjectId} patientId
@param(Object) patientBody
* @returns {Promise<Patient>}

*/
const updatePatient = async (patientBody) => {
  const {
    id,
    firstName,
    middleName,
    lastName,
    email,
    contactNo,
    dob,
    gender,
    medicalHistory,
    diseases,
    medications,
    currentHealthStatus,
    images,
  } = patientBody;

  try {
    // Check if the patient exists
    let existingPatient = await Patient.findById(id);
    if (!existingPatient) {
      throw new ApiError(httpStatus.NOT_FOUND, "Patient not found");
    }

    // Update the user associated with the patient
    let updatedUser = await User.findByIdAndUpdate(
      existingPatient.user?._id,
      {
        firstName,
        middleName,
        lastName,
        email,
        contactNo,
        dob,
        gender,
        images,
      },
      { new: true }
    );

    // Create or find diseases and specializations
    const diseaseIds = await Promise.all(
      diseases.map(async (disease) => {
        const { name, description } = disease;

        // // Find or create the specialization
        // let specializationObj = await Specialization.findOne({
        //   name: specialization,
        // });
        // if (!specializationObj) {
        //   specializationObj = await Specialization.create({
        //     name: specialization,
        //   });
        // }

        // Find or create the disease
        const newDisease = await Disease.findOneAndUpdate(
          { name },
          { name, description },
          { upsert: true, new: true }
        );

        return newDisease._id;
      })
    );

    // Update the patient record
    const updatedPatient = await Patient.findByIdAndUpdate(
      id,
      {
        user: updatedUser._id,
        medicalHistory,
        disease: diseaseIds,
        medications,
        currentHealthStatus,
      },
      { new: true }
    );

    return updatedPatient;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};

/** 
*deletePatient
 * @param {ObjectId} patientId
* @returns {Promise<Patient>}

*/
const deletePatient = async (patientId) => {
  const { id } = patientId;
  const deletedPatient = Patient.findByIdAndDelete({ _id: id._id });
  if (!deletedPatient) {
    throw new ApiError(httpStatus.NOT_FOUND, "No Patient Found");
  }
  return deletedPatient;
};

/**
 * mark as Special Attention
 * @param(Object) id
 * @returns {Promise<Patient>}
 */
const markSpecialAttention = async (patientBody) => {
  const { id } = patientBody;
  const updatedPatient = Patient.findByIdAndUpdate(
    { _id: id._id },
    { $set: !isSpecial },
    { new: true }
  );
  if (!updatedPatient) {
    throw new ApiError(httpStatus.NOT_FOUND, "No Patient Found");
  }
  return updatedPatient;
};

module.exports = {
  addPatient,
  getPatient,
  updatePatient,
  deletePatient,
  markSpecialAttention,
  getPatientById,
};
