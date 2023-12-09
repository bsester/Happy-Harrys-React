import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Sales()
{
    const [sales, setSales] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/sales/all')
            .then(res => setSales(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
    <div className = "col-sm-8" id = "saleResults">
        <table className = 'table table-striped'>
            <thead>
            <tr>
                <th> Date </th>
                <th> Customer </th>
                <th> Product </th>
                <th> Quantity </th>
                <th> Total Sales </th>
            </tr>
            </thead>
            <tbody>
            {sales.map((sales, index) =>
            {
                return <tr key ={index}>
                    <td>{sales.Sales_Date}</td>
                    <td>{sales.CustomerName}</td>
                    <td>{sales.ItemName}</td>
                    <td>{sales.Quantity}</td>
                    <td>${sales.Total}</td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
    )
}
export default Sales