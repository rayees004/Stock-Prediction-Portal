import axios from 'axios'
import React, { useState,useEffect } from 'react'
import axiosInstence from '../../axiosInstance'
import Chart from './Chart'




const DashBord = () => {
    const accessToken =localStorage.getItem("accessToken")
    const [stock,setStok] = useState([])
    const [stockUrl,setStockUrl]=useState("")
    const [activeStock, setActiveStock] = useState(0);
    useEffect( ()=> {
    const protetAccess = async()=>{
        try{
            const response =await axiosInstence("/stock/")
            console.log("data:",response.data)
            setStok(response.data)
            setStockUrl(response.data[0].stock_api_url)
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
            {stock.map((stock,index)=>(<button className={` btn  col-12 mb-1 ${activeStock === index ? ("btn-outline-light"):("btn-outline-dark text-light")}`} key={index} onClick={()=>{setStockUrl(stock.stock_api_url);setActiveStock(index)}}>{stock.stock_name}</button>))}
                
            </div>
            <div className='col-md-9 chart-section'>
                <Chart stock_url={stockUrl}/>
            </div>
        </div>
    </div>
    </>

  )
}

export default DashBord