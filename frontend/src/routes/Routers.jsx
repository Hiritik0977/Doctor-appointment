import React from 'react';
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Store from '../pages/Store'

import { Routes, Route, useParams } from 'react-router-dom'
// import Navbar from '../pages/admin/components/Navbar/Navbar';
// import Sidebar from '../pages/admin/components/Sidebar/Sidebar';
import List from '../pages/admin/components/List/List';
import Land from '../pages/admin/components/Land/Land';
import Doctorfillup from '../pages/Doctorfillup';
import Pateint from '../pages/admin/components/Patient/Pateint';
import Khalti from '../pages/admin/components/Payment/Khalti';
import DoctorDashboard from '../pages/admin/components/DoctorDashboard/Doctordashboard';
import Fever from '../components/Speciality/Fever';
import Cardio from '../components/Speciality/cardio';
import Pregnancy from '../components/Speciality/Pregnancy';
import Liver from '../components/Speciality/Liver';
import Urine from '../components/Speciality/Urine';
import Vitamins from '../components/Speciality/Vitamins';
import Dengue from '../components/Speciality/Dengue';
import Hepatitis from '../components/Speciality/Hepatitis';





const Routers = () => {
  const params = useParams();
  console.log(params)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/doctorfillup" element={<Doctorfillup/>} />
      <Route path="/store" element={<Store />} />
      <Route path="/patient" element={<Pateint />} />
      <Route path="/khalti" element={<Khalti />} />
      <Route path="/dashboard" element={<DoctorDashboard />} />
      <Route path="/fever" element={<Fever/>} />
      <Route path="/cardio" element={<Cardio/>} />
      <Route path="/dengue" element={<Dengue/>} />
      <Route path="/pregnancy" element={<Pregnancy/>} />
      <Route path="/liver" element={<Liver/>} />
      <Route path="/urine" element={<Urine/>} />
      <Route path="/vitamin" element={<Vitamins/>} />
      <Route path="/hepatitis" element={<Hepatitis/>} />


      
      
      
      


      {/* Nest Sidebar and Navbar under a parent Route */}
      <Route path="/admin" element={
      <>
      <Land/>
      </>
    } />
    </Routes>
    
  );
};

export default Routers;
