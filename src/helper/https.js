import axios from "axios";
import Cookies from "js-cookie";
import { useEffect,useState } from "react";


const token = Cookies.get('token');

// export const baseurl = 'http://localhost:8000';
export const baseurl = 'https://aartimithilakraft.com/api'

export function login(payload){
   
    const header={
        "headers":{ 
            "Content-type":"application/json"
         }
    }
    return axios.post(baseurl+'/login',payload,header)
}

export function productSubmit(payload){
    const header={
        "headers":{
            "Content-type":"multipart/form-data"
         }
    }
    return axios.post(baseurl+'/product',payload,header)
}
export function allProduct(){
    const header={
        "headers":{
            "Content-type":"application/json"
         }
    }
    return axios.get(`${baseurl}/products`,header)
}
export function getProduct(id){
    const header={
        "headers":{
            "Content-type":"application/json"
         }
    }
    return axios.get(`${baseurl}/get_product/${id}/`,header)

}
export function blockProduct(param=''){
    const header={
        "headers":{
            "Content-type":"application/json"
         }
    }
    return axios.get(`${baseurl}/block_product`,{params:param},header)
}


export function saveBlock(payload=''){
    const header={
        "headers":{
            "Content-type":"application/json"  
        }
    }
    return axios.post(`${baseurl}/save_blocks`,payload,header)
}


export function getBlocks(){
    const header={
        "headers":{
            "Content-type":"application/json"
         }
    }
    return axios.get(`${baseurl}/all_blocks`,header)

}
export function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const handler = setTimeout(() => setDebouncedValue(value), delay);
  
      return () => clearTimeout(handler); // cleanup on change
    }, [value, delay]);
  
    return debouncedValue;
  }