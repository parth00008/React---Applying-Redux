import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from './Crudslice';
import {useNavigate}  from  'react-router-dom'

function Adduser() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const[user,setuser]=useState({
        name:'',
        email:'',
        password:''
    })
    function handlesubmit(){
        dispatch(addData(user))
        navigate('/viewuser')
    }
    return (
        <div>
            <input type="text" placeholder='name' onChange={(e)=>setuser({...user,name:e.target.value})} />
            <br />
            <input type="text" placeholder='email' onChange={(e)=>setuser({...user,email:e.target.value})} />
            <br />
            <input type="text" placeholder='password' onChange={(e)=>setuser({...user,password:e.target.value})} />
            <br />
            <button onClick={handlesubmit}>submit</button>
        </div>
    )
}

export default Adduser
