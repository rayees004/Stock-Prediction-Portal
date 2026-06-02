import axios from 'axios'
import React, { useState,useEffect } from 'react'
import axiosInstence from '../../axiosInstance'
import Chart from './Chart'




const DashBord = () => {
    const accessToken =localStorage.getItem("accessToken")
    useEffect( ()=> {
    const protetAccess = async()=>{
        try{
            const response =await axiosInstence("/stock/")
            console.log("data:",response.data)
        }catch(error){
            console.log(error)
        }
    } 
    protetAccess();      
    },[])

  return (

    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className="col-md-3 side-nav-section" >
                <button className='btn btn-outline-primary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
                <button className='btn btn-outline-secondary col-12 mb-1'>crude oil</button>
            </div>
            <div className='col-md-9 chart-section'>
                <Chart/>
            </div>
        </div>
    </div>
    </>

  )
}

export default DashBord