import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
// import DataTable from "../Datatable/Datatable"
import "./list.scss"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">

       <Navbar/>
        {/* <DataTable/> */}
      </div>
    </div>
  )
}

export default List;