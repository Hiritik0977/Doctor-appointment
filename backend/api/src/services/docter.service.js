const Docter = require("../models/docter");
const Specialization = require("../models/specilaization");
const User = require("../models/user");
const Role = require("../models/role");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const doctorqualification = require("../models/doctorqualification");

const getDocterByEmail = async (DocterEmail) => {
  return await Docter.findOne({ email: DocterEmail });
};

const addDocter = async (doctorBody) => {
  const {
    firstName,
    middleName,
    lastName,
    email,
    contactNo,
    experience,
    qualification,
    specialization,
    images,
    role
  } = doctorBody;

  try {
    // Check if the doctor already exists with the provided email
    let existingDoctor = await User.findOne({ email: email });
    console.log(existingDoctor, 'ed')
    if (existingDoctor) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "Email already used by another doctor"
      );
    }

    // Find or create a role for the doctor
    let existingRole = await Role.findOne({ role });
    if (!existingRole) {
      existingRole = await Role.create({ role });
    }

    // Create a new user for the doctor
    const newUser = await User.create({
      firstName,
      middleName,
      lastName,
      email,
      contactNo,
      images,
      role: existingRole._id,
    });

    // Find or create the specialization
    let specializationObj = await Specialization.findOne({ name: specialization });
    if (!specializationObj) {
      specializationObj = await Specialization.create({ name: specialization });
    }



    // Create a new doctor record and link it to the user
    const newDocter = await Docter.create({
      experience,
      qualification,
      user: newUser._id,
      specialization: specializationObj._id,
    });
    const  savedDocter = await newDocter.save();
    if(savedDocter) {
      const newQualification  = new doctorqualification.create({
        doctor: savedDocter,
        name: qualification.name,
        fromdate:qualification.fromdate,
        todate:qualification.todate,
        school:qualification.school
      })

      await newQualification.save()

      const newQualification  = new doctorqualification.create({
        doctor: savedDocter,
        name: qualification.name,
        fromdate:qualification.fromdate,
        todate:qualification.todate,
        school:qualification.school
      })

      await newQualification.save()
    }
    //save doctor qualification
    

    return newDocter;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};


const getDocter = async () => {
  try {
    const doctors = await Docter.find({ isApproved: true })
      .populate("user")
      .populate("specialization");

    if (doctors.length > 0) {
      return doctors;
    } else {
      throw new ApiError(httpStatus.NOT_FOUND, "No Doctors Found");
    }
  } catch (error) {
    if (error instanceof ApiError) {
      throw error; // Re-throw custom ApiError
    } else {
      throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "Error fetching doctors"
      );
    }
  }
};

const fetchAllDocter = async () => {
  try {
    
    const docter = await Docter.find().populate("user").populate("specialization");
    if (docter.length > 0) {
      return docter;
    } else {
      throw new ApiError(httpStatus.NOT_FOUND, "No Doctor Found");
    }
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Error fetching doctors");
  }
};


const updateDocter = async (updatedDoctorData) => {
  const {
    docterId, 
    firstName,
    middleName,
    lastName,
    email,
    contactNo,
    dob,
    gender,
    experience,
    education,
    specialization,
    images,
  } = updatedDoctorData;

  try {
    // Find the existing doctor by ID and update the fields
     let existingDocter = await Docter.findById(docterId);
    if (!existingDocter) {
      throw new ApiError(httpStatus.NOT_FOUND, "Docter not found");
    }

    let updatedDoctor = await User.findByIdAndUpdate(
      existingDocter.user?._id,
      {
        firstName,
        middleName,
        lastName,
        email,
        contactNo,
        dob,
        gender,
        images,
         experience,
        education,
        images,
      },
      { new: true }
    );

    // If the doctor doesn't exist, throw an error
    if (!updatedDoctor) {
      throw new ApiError(httpStatus.NOT_FOUND, "Doctor not found");
    }

   

  

    // Find or create the specialization
    let specializationObj = await Specialization.findOneAndUpdate(
      { name: specialization },
      { name: specialization },
      { upsert: true, new: true }
    );

    // Update the specialization for the doctor
    updatedDoctor.specialization = specializationObj._id;

    // Save the updated doctor
    await updatedDoctor.save();

    return updatedDoctor;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};




const getDocterById = async (id) => {
  try {
    const doctor = await Docter.findById(id).populate('user').populate("specialization");
    if (!doctor) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Doctor not found');
    }
    return doctor;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  }
};
const deleteDocter = async (DocterId) => {
  const { id } = DocterId;
  const deletedDocter = Docter.findByIdAndDelete({ _id: id._id });
  if (!deletedDocter) {
    throw new ApiError(httpStatus.NOT_FOUND, "No Docter Found");
  }
  return deletedDocter;
};

/**
 * mark as Special Attention
 * @param(Object) id
 * @returns {Promise<Docter>}
 */
const markSpecialAttention = async (DocterBody) => {
  const { id } = DocterBody;
  const updatedDocter = Docter.findByIdAndUpdate(
    { _id: id._id },
    { $set: !isSpecial },
    { new: true }
  );
  if (!updatedDocter) {
    throw new ApiError(httpStatus.NOT_FOUND, "No Docter Found");
  }
  return updatedDocter;
};

module.exports = {
  addDocter,
  getDocter,
  updateDocter,
  deleteDocter,
  markSpecialAttention,
  getDocterById,
  fetchAllDocter
};
