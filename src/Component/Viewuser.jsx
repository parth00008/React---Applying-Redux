import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Viewuser() {
    const data=useSelector(state=>state.crud)
    const navigate = useNavigate()
    // console.log(data);

    function handleedit(id,val){
         navigate('/updateuser',{state:{id,userToEdit:val}})
    }
    
    return (
        <div>
          {data && data.map((val,index)=>{
            return(
                <div key={index}>
                    <b>{val.name}</b>
                    <p>{val.email}</p>
                    <button onClick={()=>handleedit(val,index)}>Edit-user</button>
                </div>
            )
          })}
        </div>
    )
}

export default Viewuser
