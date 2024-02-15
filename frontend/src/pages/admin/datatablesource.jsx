export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Hirthik",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1patient@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Hirthik",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2patient@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Hirthik",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3patient@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Hirthik",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4patient@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Hirthik",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5patient@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Hirthik",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6patient@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Hirthik",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7patient@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Hirthik",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8patient@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Hirthik",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "9patient@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Hirthik",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "10patient@gmail.com",
      status: "active",
      age: 65,
    },
  ];
  