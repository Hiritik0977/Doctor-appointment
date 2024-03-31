import React, { useState, useEffect } from "react";
import "./datatable.scss";

import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";


import "./datatable.scss";
import DocterApiService from "../../../../api/docter.service";
import UserApiService from "../../../../api/user.service";


const userColumns = [
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'contactNo', headerName: 'Contact No', width: 150 },
  { field: 'isSpecial', headerName: 'Special', width: 120, renderCell: (params) => params.value ? 'Yes' : 'No' },
];

const Datatable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DocterApiService.fetchAllDocter();
        const doctors = response.data.docter.map((doctor, index) => ({
          ...doctor.user,
          docId: doctor._id,
          isApproval: doctor.isApproval,
          id: index + 1, // Generate a unique id for each doctor
        }));

        const doctorsObject = doctors.reduce((acc, doctor) => {
          acc[doctor.id] = doctor;
          return acc;
        }, {});

        setData(doctorsObject);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchData();
  }, []);

  const toggleDoctorStatus = async (id) => {
    try {
      console.log("Toggling doctor status for doctor with ID:", id);
      await UserApiService.toggleDoctorStatus(id);
      setData((prevState) => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          isApproval: !prevState[id]?.isApproval
        }
      }));
    } catch (error) {
      console.error("Error toggling doctor status:", error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className={`toggleButton ${params.row.isApproval ? 'enabled' : 'disabled'}`}
              onClick={params.row.isApproval ? () => toggleDoctorStatus(params.row.docId) : null}
            >
              {params.row.isApproval ? "Close" : "Open"}
            </div>
          </div>
        );
      },
    },
  ];

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
        rows={Object.values(data)}
        columns={[...userColumns, ...actionColumn]}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;