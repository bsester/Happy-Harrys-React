import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";

function CreateCustomer()
{
    const [values, setValues] = useState({
        name: '',
        email: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/customers/create', values)
            .then(res => {
                console.log(res);
                navigate('/customers');
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2> Add Customer </h2>
                    <div className='mb-2'>
                        <label htmlFor=""> Name </label>
                        <input type = 'text' placeholder= 'Enter Name Here' className= 'form-control'
                               onChange ={e => setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=""> Email </label>
                        <input type = 'text' placeholder= 'Enter Email Here' className= 'form-control'
                               onChange ={e => setValues({...values, email: e.target.value})}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/customers" className='btn btn-primary'>Back</Link>
                </form>
            </div>
        </div>
    )
}
export default CreateCustomer