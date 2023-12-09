import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

function EditCustomer()
{
    const {id} = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/customers/read/'+id)
            .then(res => {
                console.log(res)
                setValues({...values, name:res.data[0].CustomerName, price: res.data[0].CustomerEmail})
            })
            .catch(err => console.log(err))
    }, []);

    const [values, setValues] = useState({
        name: customer.CustomerName,
        email: customer.CustomerEmail
    })

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/customers/edit/' + id, values)
            .then(res => {
                console.log(res);
                navigate('/customers');
            }).catch(err => console.log(err.response.data));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-customers-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2> Update Customer  </h2>
                    <div className='mb-2'>
                        <label htmlFor=""> Name </label>
                        <input type = 'text' placeholder= 'Enter Name Here' className= 'form-control' value={[values.name]}
                               onChange ={e => setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=""> Email </label>
                        <input type = 'number' placeholder= 'Enter Price Here' className= 'form-control' value={[values.price]}
                               onChange ={e => setValues({...values, email: e.target.value})}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/customers" className='btn btn-primary'>Back</Link>
                </form>
            </div>
        </div>
    )
}

export default EditCustomer