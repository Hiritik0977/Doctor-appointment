import React, { useEffect, useState } from 'react';
import './doctordash.css'; // Import CSS file

const Doctordash = () => {
    const [record, setRecord] = useState([]);
    const cardColors = ['#57b960', '#dc3545', '#17a2b8', '#ffc107']; // Array of background colors for cards

    useEffect(() => {
        const getData = () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => setRecord(data))
                .catch(error => console.error('Error fetching data:', error));
        };
        getData();
    }, []);

    // Sample review data
    const reviews = [
        { name: 'Ram', rating: 5, comment: 'The staff and severices were too good' },
        { name: 'Shyam', rating: 4, comment: 'The doctor consulation was satisfying' },
        { name: 'Krishna', rating: 3, comment: 'Peace  and clean environment ' },
        
    ];

    return (
        <div className="container">
            <p className="lead d-none d-sm-block text-[48px] mt-10 mb-10" >All Appointment Details and Records</p>
            <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    <span className="sr-only">Close</span>
                </button>
                <strong>Data and Records</strong> Learn more about employee
            </div>
            <div className="card-container">
                {record.slice(0, 4).map((user, index) => (
                    <div className="card" key={user.id} style={{ backgroundColor: cardColors[index] }}>
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-user fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">{user.name}</h6>
                            <h1 className="display-4">134</h1>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-7 col-md-6 col-sm-12">
                    <h5 className="mt-3 mb-3 text-secondary">Check More Records of Appointments</h5>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {record.slice(0, 5).map(output =>
                                    <tr key={output.id}>
                                        <td>{output.id}</td>
                                        <td>{output.name}</td>
                                        <td>{output.email}</td>
                                        <td>{output.username}</td>
                                        <td>{output.website}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <h5 className="mt-10 mb-3 text-secondary">Reviews</h5>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Rating</th>
                                    <th >Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((review, index) => (
                                    <tr key={index}>
                                        <td>{review.name}</td>
                                        <td className="text-center">{review.rating}</td>
                                        <td>{review.comment}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctordash;
