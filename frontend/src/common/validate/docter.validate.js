const DocterValidate = (values) => {
    const errors = {};
  
    if (!values.firstName) {
      errors.firstName = "First name is required";
    }
  
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }
  
    if (!values.qualification) {
      errors.qualification = "Qualification is required";
    }
  
    if (!values.experience) {
      errors.experience = "Experience is required";
    }
  
    if (!values.speciality) {
      errors.speciality = "Speciality is required";
    }
  
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(values.phoneNumber)) {
      errors.phoneNumber = "Phone number must be 10 digits";
    }
  
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
  
    return errors;
  };
  
  export default DocterValidate;
  