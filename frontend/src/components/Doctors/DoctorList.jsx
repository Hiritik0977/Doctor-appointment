import react, {useState, useEffect} from "react"
import DocterApiService from "../../api/docter.service";
import { doctors } from "./../../assets/data/doctors";
import DoctorCard from "./DoctorCard";

const Doctorlist = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DocterApiService.getDocter();
        setDoctors(response.data.docter);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default Doctorlist;
