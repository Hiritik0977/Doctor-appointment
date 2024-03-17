import axios from "axios";

let API_URL =  "http://localhost:3001/v1/docter";

const addDocter = (data) => {
  const response = axios.post(API_URL,  {
    //basic information
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    contactNo: data.phoneNumber,
    qualification: data.qualification,
    experience:data.experience,
    speciality:data.speciality,
    role:"docter"

    //doctor information
  });

  return response;
};



const DocterApiService = {
  addDocter,
 
};

export default DocterApiService;