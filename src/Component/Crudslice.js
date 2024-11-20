import { createSlice } from "@reduxjs/toolkit";

const Crudslice=createSlice({
    name:'crud',
    initialState:[],
    reducers:{
        addData:(state,action)=>{
            return[...state,action.payload]
        },
        edituser:(state,action)=>{
            const {id,user} = (action.payload);
            
            return state.map((val,index)=>{
                if(index==id) return {...val,...user}
                return val
            })
        }
    }
})
export const {addData,edituser} = Crudslice.actions;
export default Crudslice.reducer;