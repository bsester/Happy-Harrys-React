import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Sales()
{
    const [sales, setSales] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/sales/all')
            .then(res => setCustomers(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
    <div className = "col-sm-8" id = "saleResults">
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
                    <td> <Link to={`/customers/edit/${customer.CustomerID}`} className='btn btn-sm btn-info'>Update</Link></td>
                    <td> <button onClick={() => handleDelete(customer.CustomerID)} className='btn btn-sm btn-danger'>Delete</button></td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
    )
}
export default Sales