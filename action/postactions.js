import { getpost } from "./types";
import Axios from 'axios'

export const getpostdata=()=>{
    return async (dispatch,getState)=>{
        const res=await fetch("http://127.0.0.1:8000/api/lead/")
        const data=await res.json()
        dispatch({
            type:getpost,
            payload:data
        }) 
    }
}