import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import Widget from '../widget/Widget'
import './land.scss'

const Land = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="patient" />
          <Widget type="doctor" />
          <Widget type="appointment" />
          <Widget type="balance" />
        </div>
        
      </div>
    </div>
  )
}

export default Land
