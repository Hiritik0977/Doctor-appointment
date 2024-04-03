import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Space, Switch } from 'antd';
import DocterApiService from "../../../../api/docter.service";
import UserApiService from "../../../../api/user.service";

const toggleDoctorStatus = async (id, setData) => {
  try {
    console.log("Toggling doctor status for doctor with ID:", id);
    await UserApiService.toggleDoctorStatus(id);
    setData(prevData => prevData.map(doctor =>
      doctor._id === id ? { ...doctor, isApproved: !doctor.isApproved } : doctor
    ));
  } catch (error) {
    console.error("Error toggling doctor status:", error);
  }
};

const ApprovedSwitch = ({ id, isApproved, disabled, setData }) => (
  <Space size="middle">
    <Switch
      checked={isApproved}
      disabled={disabled}
      style={{ backgroundColor: isApproved ? '#53C31B' : '' }}
      onClick={() => toggleDoctorStatus(id, setData)} // Pass reference to toggleDoctorStatus with appropriate parameters
    />
  </Space>
);

const userColumns = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'contactNo', headerName: 'Contact No', width: 150 },
  { field: 'isSpecial', headerName: 'Special', width: 120, renderCell: (params) => params.value ? 'Yes' : 'No' },
  { field: 'isApproved', headerName: 'IsApproved', width: 120, renderCell: (params) => (
    <ApprovedSwitch id={params.row.docId} isApproved={params.row.isApproved} disabled={false} setData={params.api.setData} />
  )},
];

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DocterApiService.fetchAllDocter();
        const doctors = response.data.docter.map((doctor, index) => ({
          ...doctor.user,
          docId: doctor._id,
          isApproved: doctor.isApproved,
          id: index + 1,
        }));
        setData(doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns} // Simplified passing userColumns array directly
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
