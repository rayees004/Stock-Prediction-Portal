import axios from 'axios'
import React, { useState,useEffect } from 'react'
import axiosInstence from '../../axiosInstance'
import Chart from './Chart'




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
    <div className='row'>
        <div className='col-md-3'>1</div>
        <div className='col-md-3'>2</div>
    </div>
  )
}

export default DashBord