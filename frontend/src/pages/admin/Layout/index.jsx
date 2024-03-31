import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

function AdminLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
