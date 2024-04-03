import axios from "axios";

let API_URL = "http://localhost:3001/v1/docter";

const addDocter = (data) => {
  const response = axios.post(API_URL, {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    contactNo: data.phoneNumber,
    qualification: data.qualification,
    experience: data.experience,
    specialization: data.specialization,
    role: "docter",
  });

  return response;
};

const getDocter = () => {
  const response = axios.get(API_URL);

  return response;
};

const getDocterById = (id) => {
  console.log(id, "id")
  const response = axios.get(`${API_URL}/${id}`);

  return response;
};

const fetchAllDocter = () => {
  const response  = axios.get(`${API_URL}/all`);
  return response;
}

const toggleDoctorStatus = (doctorId) => {
  const response = axios.put(`${API_URL}/toggle-doctor-status/${doctorId}`);
  return response;
};

const DocterApiService = {
  addDocter,
  getDocter,
  fetchAllDocter,
  toggleDoctorStatus,
  getDocterById
};

export default DocterApiService;
