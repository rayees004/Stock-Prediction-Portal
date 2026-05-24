import axios from 'axios'
import React, { useState,useEffect } from 'react'
import axiosInstence from '../../axiosInstance'


const DashBord = () => {
    const accessToken =localStorage.getItem("accessToken")
    useEffect( ()=> {
    const protetAccess = async()=>{
        try{
            const response =await axiosInstence("/permited_access/")
            console.log("data:",response.data)
        }catch(error){
            console.log(error)
        }
    } 
    protetAccess();      
    },[])

  return (
    <div className='container text-light'>
        <h3>dashbord page</h3>
    </div>
  )
}

export default DashBord