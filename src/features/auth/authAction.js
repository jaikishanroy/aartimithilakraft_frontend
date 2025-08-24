import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { addToken } from './authSlice';
import { redirect, useNavigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { baseurl } from '../../helper/https';
import { Navigate } from 'react-router-dom';

//const backendUrl = 'http://localhost:8000';
const backendUrl =baseurl;

export const browserHistory = createBrowserHistory();
export const loginUser = createAsyncThunk(
'/login',async({email,password},{dispatch})=>{
 
    try{
        const config={
            'headers':{
                'Content-Type':'application/json',
            },
        }
        await axios.post(`${backendUrl}/login`,{email,password},config).then((res)=>{
            console.log(res);
           
            dispatch(addToken(res.data))
            // setTimeout(()=>{
            //     navigate('/admin')
            // },2000)
            
        })
    }catch(error){
        if (error.response && error.response.data.message) {
            //return rejectWithValue(error.response.data.message)
          } else {
            //return rejectWithValue(error.message)
          }
    }
}
)

export const registerUser = createAsyncThunk(
    '/register',async(payload,dispatch)=>{
        try{
            const config={
                'headers':{
                    'Content-Type':'application/json',
                },
            }
            await axios.post(`${backendUrl}/register`,payload,config).then((res)=>{
                dispatch(res)
            })
        }catch(error){
            if (error.response && error.response.data.message) {
                //return rejectWithValue(error.response.data.message)
              } else {
                //return rejectWithValue(error.message)
              }
        }
    }
    )