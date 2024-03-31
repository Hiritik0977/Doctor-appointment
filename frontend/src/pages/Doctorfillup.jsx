import React, { useState, useEffect } from "react";
import { notification } from "antd";
import DocterValidate from "../common/validate/docter.validate";
import DocterApiService from "../api/docter.service";

// Custom Notification Component
const EventNotification = ({ type, message, description }) => {
  const iconType = type === "success" ? "check-circle" : "exclamation-circle";
  const iconColor = type === "success" ? "#52c41a" : "#f5222d";

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "8px" }}>
        <i className={`anticon anticon-${iconType}`} style={{ fontSize: "24px", color: "black" }} />
      </div>
      <div>
        <h3 style={{ margin: 0 }}>{message}</h3>
        <p style={{ margin: 0 }}>{description}</p>
      </div>
    </div>
  );
};

const DoctorFillupForm = () => {
  const initialState = {
    firstName: "",
    middleName: "",
    lastName: "",
    qualification: "",
    experience: "",
    specialization: "",
    phoneNumber: "",
    email: "",
    currentlyWorkingAt: "",
  };

  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(DocterValidate(formValues));
    setSubmit(true);
    setLoading(true);

    try {
      const response = await DocterApiService.addDocter(formValues);
      console.log(response, "response")
      setStatus(response.status);
      setMessage(response.message);
      notification.success({message:response.data.message});
    } catch (error) {
      notification.error({message:error.message});
      setStatus(response.status);
      console.error('Error adding doctor:', error);
    }
  };

  const handleCancel = () => {
    setFormValues(initialState);
    setFormErrors({});
  };

  useEffect(() => {
    if (status === 201) {
      notification.open({
        duration: 10,
        message: <EventNotification type="success" message={message} description={message} />,
        onClose: () => {
          window.location.href = "/home";
        }
      });
    } else if (status === 400 || status === 500) {
      notification.open({
        duration: 10,
        message: <EventNotification type="error" message={message} description={message} />,
      });
    }
  }, [status, message]);

  // Inline CSS styles
  const containerStyle = {
    backgroundColor: "#f0f0f0", // Gray background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Center vertically
  };

  const formStyle = {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "80%",
    maxWidth: "1000px",
  };

  const inputStyle = {
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "calc(100% - 20px)",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
  };

  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#05472A",
    color: "#fff",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s", // Smooth transition for background color change
    // Hover effect
    ":hover": {
      backgroundColor: "#186A3B", // Change background color on hover
    },
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "#05472A",
            fontWeight: "600",
            margin: "20px",
          }}
        >
          Apply as a doctor
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            {formErrors.firstName && (
              <div style={{ color: "red" }}>{formErrors.firstName}</div>
            )}
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            {formErrors.lastName && (
              <div style={{ color: "red" }}>{formErrors.lastName}</div>
            )}
          </div>
          <div>
            <label htmlFor="qualification">Qualification:</label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              value={formValues.qualification}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            {formErrors.qualification && (
              <div style={{ color: "red" }}>{formErrors.qualification}</div>
            )}
          </div>
          <div>
            <label htmlFor="experience">Experience:</label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formValues.experience}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            {formErrors.experience && (
              <div style={{ color: "red" }}>{formErrors.experience}</div>
            )}
          </div>
          <div>
            <label htmlFor="speciality">Speciality:</label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              value={formValues.specialization}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            {formErrors.speciality && (
              <div style={{ color: "red" }}>{formErrors.specialization}</div>
            )}
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            {formErrors.phoneNumber && (
              <div style={{ color: "red" }}>{formErrors.phoneNumber}</div>
            )}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            {formErrors.email && (
              <div style={{ color: "red" }}>{formErrors.email}</div>
            )}
          </div>
          <div>
            <label htmlFor="currentlyWorkingAt">Currently Working At:</label>
            <input
              type="text"
              id="currentlyWorkingAt"
              name="currentlyWorkingAt"
              value={formValues.currentlyWorkingAt}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            {formErrors.currentlyWorkingAt && (
              <div style={{ color: "red" }}>{formErrors.currentlyWorkingAt}</div>
            )}
          </div>
        </div>
        <div style={buttonContainerStyle}>
          <button type="button" onClick={handleCancel} style={buttonStyle}>
            Cancel
          </button>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorFillupForm;
