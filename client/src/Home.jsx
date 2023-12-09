import Navbar from "./Navbar";
import {useEffect, useState} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


function Home()
{
    const [topCustomers, setTopCustomers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/topCustomers')
            .then(res => setTopCustomers(res.data))
            .catch(err => console.log(err))
    }, []);

    return (

        <div className="row">
            <div className="col-sm-4">
                <h2 className = "text-center"> Top Customers </h2>
                <div id = "customerResults">
                    <table className = 'table table-striped'>
                    <thead>
                    <tr>
                        <th> Name </th>
                        <th> Sales </th>
                    </tr>
                    </thead>
                        <tbody>
                        {topCustomers.map((customer, index) =>
                        {
                            return <tr key ={index}>
                                <td>{customer.CustomerName}</td>
                                <td>${customer.Total}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-sm-4">
                <h2 className = "text-center"> Items </h2>
                <div id = "itemResults">

                </div>

            </div>
            <div className="col-sm-4">
                <h2 className = "text-center"> Sales </h2>
                <div id = "saleResults">

                </div>
            </div>
        </div>
    )
}
export default Home