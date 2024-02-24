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
