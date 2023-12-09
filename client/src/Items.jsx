import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Items()
{
    // grab all products
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/items/all')
            .then(res => setItems(res.data))
            .catch(err => console.log(err))
    }, []);
    const handleDelete = (id) =>
    {
        axios.delete('http://localhost:8081/items/delete/'+id)
            .then(res => {
                window.location.reload();
            })
            .catch(err => console.log(err))
    }
    return (
    <div className="container">
    <div className = "col-sm-8" id = "itemResults">
        <table className = 'table table-striped'>
            <thead>
            <tr>
                <th> Product </th>
                <th> Total Sales </th>
            </tr>
            </thead>
            <tbody>
            {items.map((item, index) =>
            {
                return <tr key ={index}>
                    <td>{item.ItemName}</td>
                    <td>${item.Total}</td>
                    <td> <Link to={`/items/edit/${item.ItemID}`} className='btn btn-sm btn-info'>Update</Link></td>
                    <td> <button onClick={() => handleDelete(item.ItemID)} className='btn btn-sm btn-danger'>DELETE</button></td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
    <span className ="align-content-center">
        <Link to="/items/create" className='btn btn-success'>Insert New Product</Link>
    </span>
    </div>
    )
}

export default Items