import axios from "axios";

let API_URL = "http://localhost:3001/v1/users";





const toggleDoctorStatus = (doctorId) => {
  const response = axios.put(`${API_URL}/toggle-doctor-status/${doctorId}`);
  return response;
};

const UserApiService = {

  toggleDoctorStatus,
};

export default UserApiService;
