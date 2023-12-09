import Navbar from "./Navbar";
import {useEffect, useState} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


function Home()
{
    // grab top customers
    const [topCustomers, setTopCustomers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/customers/top')
            .then(res => setTopCustomers(res.data))
            .catch(err => console.log(err))
    }, []);

    // grab top items
    const [topItems, setTopItems] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/items/top')
            .then(res => setTopItems(res.data))
            .catch(err => console.log(err))
    }, []);

    // grab top sales
    const [topSales, setTopSales] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/sales/top')
            .then(res => setTopSales(res.data))
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
                    <table className = 'table table-striped'>
                        <thead>
                        <tr>
                            <th> Item </th>
                            <th> Total Sales </th>
                        </tr>
                        </thead>
                        <tbody>
                        {topItems.map((item, index) =>
                        {
                            return <tr key ={index}>
                                <td>{item.ItemName}</td>
                                <td>${item.Total}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="col-sm-4">
                <h2 className = "text-center"> Sales </h2>
                <div id = "saleResults">
                    <table className = 'table table-striped'>
                        <thead>
                        <tr>
                            <th> Month </th>
                            <th> Sales </th>
                        </tr>
                        </thead>
                        <tbody>
                        {topSales.map((sales, index) =>
                        {
                            return <tr key ={index}>
                                <td>{sales.month}</td>
                                <td>${sales.Total}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Home