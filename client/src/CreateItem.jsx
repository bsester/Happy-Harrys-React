import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";

function CreateItem()
{
    const [values, setValues] = useState({
        name: '',
        price: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/items/create', values)
            .then(res => {
                console.log(res);
                navigate('/items');
                window.location.reload();
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2> Add item </h2>
                    <div className='mb-2'>
                        <label htmlFor=""> Name </label>
                        <input type = 'text' placeholder= 'Enter Name Here' className= 'form-control'
                               onChange ={e => setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=""> Price </label>
                        <input type = 'number' placeholder= 'Enter Price Here' className= 'form-control'
                               onChange ={e => setValues({...values, price: e.target.value})}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/items" className='btn btn-primary'>Back</Link>
                </form>
            </div>
        </div>
    )
}
export default CreateItem