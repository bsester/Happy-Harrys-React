import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Customers()
{
    // grab all customers
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/customers/all')
            .then(res => setCustomers(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className = "container">
            <div className = "col-sm-8" id = "customerResults">
                <table className = 'table table-striped'>
                    <thead>
                    <tr>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Total Sales </th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer, index) =>
                    {
                        return <tr key ={index}>
                            <td>{customer.CustomerName}</td>
                            <td>{customer.CustomerEmail}</td>
                            <td>${customer.Total}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        <span className ="align-content-center">
            <Link to="/customers/create" className='btn btn-success'>Add Customer</Link>
        </span>
        </div>
    )
}
export default Customers