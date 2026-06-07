import axios from 'axios'
import React, { useState,useEffect, use } from 'react'
import axiosInstence from '../../axiosInstance'
import Chart from './Chart'
import PredictedChart from './PredictedChart'




const DashBord = () => {
    const accessToken =localStorage.getItem("accessToken")
    const [stock,setStok] = useState([])
    const [stockUrl,setStockUrl]=useState("")
    const [activeStock, setActiveStock] = useState(0);
    const [predictedchart,setPredictedChart] = useState(false)
    const [stockid, setStockid] = useState(0)
    useEffect( ()=> {
    const protetAccess = async()=>{
        try{
            const response =await axiosInstence("/stock/")
            console.log("data:",response.data)
            setStok(response.data)
            setStockUrl(response.data[0].stock_api_url)
            setStockid(response.data[0].id)
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
            {stock.map((stock,index)=>(<button className={` btn  col-12 mb-1 ${activeStock === index ? ("btn-outline-light"):("btn-outline-dark text-light")}`} key={index} onClick={()=>{setStockUrl(stock.stock_api_url);setActiveStock(index);setPredictedChart(false);setStockid(stock.id)}}>{stock.stock_name}</button>))}
                
            </div>
            <div className='col-md-9 chart-section justify-content-center'>
                <Chart stock_url={stockUrl}/>
                {stockid ? (<button onClick={()=>setPredictedChart(true)} className='btn btn-outline-success d-block m-auto'>Predict Stock Price</button>):(<></>)}
                { predictedchart ? (<PredictedChart stockid={stockid}/>):(<></>)}
            </div>
        </div>
    </div>
    </>

  )
}

export default DashBord