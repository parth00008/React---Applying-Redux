import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { edituser } from './Crudslice'
import { useLocation, useNavigate } from 'react-router-dom'

function Updateuser() {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id,userToEdit} = location.state
    const[user,setuser]=useState({
        name: userToEdit.name,
        email: userToEdit.email,
        password: userToEdit.password,
    })
    function handleupdate(){
        dispatch(edituser({id,user}))
        navigate('/viewuser')
    }
    return (
        <div>
            <input type="text" 
            placeholder='name' value={user.name} onChange={(e)=>setuser({...user,name:e.target.value})} />
            <br />
            <input type="text" placeholder='email' value={user.email} onChange={(e)=>setuser({...user,name:e.target.value})} />
             <br />
            <input type="text" placeholder='password' value={user.password} onChange={(e)=>setuser({...user,name:e.target.value})} />
            <hr />
            <button onClick={handleupdate}>update</button>

        </div>
    )
}

export default Updateuser
