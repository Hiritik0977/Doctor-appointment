import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import Widget from '../widget/Widget'

import './land.scss'
import Featured from '../Featured/Featured'
import Chart from '../chart/Chart'

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
          {/* <Widget type="balance" /> */}
        </div>
        <div className="charts">
        <Featured/>
        <Chart title="Last 6 Months (appointments)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  )
}

export default Land
