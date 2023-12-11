import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

function EditItem()
{
    const {id} = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/items/read/'+id)
            .then(res => {
                console.log(res)
                setValues({...values, name:res.data[0].ItemName, price: res.data[0].ItemPrice})
            })
            .catch(err => console.log(err))
    }, []);

    const [values, setValues] = useState({
        name: item.ItemName,
        price: item.ItemPrice
    })

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/items/edit/' + id, values)
            .then(res => {
                console.log(res);
                navigate('/items');
            }).catch(err => console.log(err.response.data));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2> Update Product  </h2>
                    <div className='mb-2'>
                        <label htmlFor=""> Name </label>
                        <input type = 'text' placeholder= 'Enter Name Here' className= 'form-control' value={[values.name]}
                               onChange ={e => setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=""> Price </label>
                        <input type = 'number' placeholder= 'Enter Price Here' className= 'form-control' value={[values.price]}
                               onChange ={e => setValues({...values, price: e.target.value})}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/items" className='btn btn-primary'>Back</Link>
                </form>
            </div>
        </div>
    )
}

export default EditItem