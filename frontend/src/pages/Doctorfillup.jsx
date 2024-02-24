import React, { useState } from 'react';

const DoctorFillupForm = () => {
  // State variables to store form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [speciality, setSpeciality] = useState('');
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [currentlyWorkingAt, setCurrentlyWorkingAt] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend or perform other actions
    console.log({ nfirstName, lastName, qualification, experience, speciality,  phoneNumber, email, currentlyWorkingAt });
    // Reset form fields
    setFirstName('');
    setLastName('');
    setQualification('');
    setExperience('');
    setSpeciality('');
    
    setPhoneNumber('');
    setEmail('');
    setCurrentlyWorkingAt('');
  };

  // Function to handle cancel button click
  const handleCancel = () => {
    // Reset form fields
    setFirstName('');
    setLastName('');
    setQualification('');
    setExperience('');
    setSpeciality('');
    
    setPhoneNumber('');
    setEmail('');
    setCurrentlyWorkingAt('');
  };

  // Inline CSS styles
  const containerStyle = {
    backgroundColor: '#f0f0f0', // Gray background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Center vertically
  };

  const formStyle = {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '80%',
    maxWidth: '1000px',
  };

  const inputStyle = {
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: 'calc(100% - 20px)',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#05472A',
    color: '#fff',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s', // Smooth transition for background color change
    // Hover effect
    ':hover': {
      backgroundColor: '#186A3B', // Change background color on hover
    },
  };
  

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h1 style={{ textAlign: 'center', fontSize:'20px', color:'#05472A', fontWeight:'600', margin:'20px'}}>Apply as a doctor</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="qualification">Qualification:</label>
            <input
              type="text"
              id="qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="experience">Experience:</label>
            <input
              type="text"
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="speciality">Speciality:</label>
            <input
              type="text"
              id="speciality"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="currentlyWorkingAt">Currently Working At:</label>
            <input
              type="text"
              id="currentlyWorkingAt"
              value={currentlyWorkingAt}
              onChange={(e) => setCurrentlyWorkingAt(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
        </div>
        <div style={buttonContainerStyle}>
          <button type="button" onClick={handleCancel} style={buttonStyle}>Cancel</button>
          <button type="submit" style={buttonStyle}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DoctorFillupForm;
