import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Datatable from "../datatable/Datatable"

import "./list.scss"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">

       <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List;