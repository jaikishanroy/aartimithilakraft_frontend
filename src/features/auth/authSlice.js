import { createSlice } from "@reduxjs/toolkit";
import { toHaveFormValues } from "@testing-library/jest-dom/matchers";
import { loginUser } from "./authAction";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

const initialState={
    loading:false,
    userInfo:null,
    token:null,
    error:null,
    success:false
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        addToken:(state,payload)=>{
            
         
            console.log("payload",payload['payload']['refresh']);

            state.token= payload['payload']['refresh']
            Cookies.set('auth',payload['payload']['refresh'])
            
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,(state)=>{
            state.loading= true
        })//.
        // addCase(loginUser.fulfilled, (state, {payload})=>{
        //     console.log(payload);
           
        //     debugger
            

        // })
        // [loginUser.pending]:(state)=>{
        //     state.loading=true  
        //     state.error=null
        // },
        // [loginUser.fulfilled]:(state,{payload})=>{
        //     state.loading=false,
        //     state.success= true
        // },
    }
})

const {actions, reducer} = authSlice
export const {addToken} = actions
export default reducer