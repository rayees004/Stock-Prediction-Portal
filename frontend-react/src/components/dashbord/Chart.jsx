import { useState, useEffect } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import axios from 'axios';





const Chart = ({stock_url}) => {
    const [data,setData] = useState({data:"",interval:"",name:"",unit:""})
    const [slicedata,setSliceData] = useState({start:0,end:20,length:0})
    
    useEffect(()=>{
        const getData= async ()=>{
            try{

                const response =await axios.get(stock_url)
                // console.log(response.data)
                
                
                
                
                setData(response.data)
                setSliceData({...slicedata,length : data.data.length})
                 

            }catch(error){
                console.log(error)
            }
            
        };
        getData()
    },[stock_url])
  return (
    <> 
    {data.data ? (
      <div>
        {slicedata.end < data.data.length ? (<button className='btn btn-outline-primary' onClick={()=>setSliceData({start:slicedata.start+20,end:slicedata.end+20})}><i className="bi bi-arrow-left"></i></button>):(<button className='btn btn-outline-primary disabled' onClick={()=>setSliceData({start:slicedata.start+20,end:slicedata.end+20})}><i class="bi bi-arrow-left"></i></button>)}
        {slicedata.start !=0 ?  (<button className='btn btn-outline-primary' onClick={()=>setSliceData({start:slicedata.start-20,end:slicedata.end-20})}><i className="bi bi-arrow-right"></i></button>):(<button className='btn btn-outline-primary disabled' onClick={()=>setSliceData({start:slicedata.start-20,end:slicedata.end-20})}><i className="bi bi-arrow-right"></i></button>)}
        {slicedata.start != 0 ? (<button className='btn btn-outline-primary'onClick={()=>setSliceData({start:0,end:20})}>latest</button>):(<button className='btn btn-outline-primary disabled'onClick={()=>setSliceData({start:0,end:20})}>latest</button>)}
        <LineChart
      style={{ width: '100%', aspectRatio: 1.618, maxWidth: 1800, height:'500px', margin: '20px 0px 0px 0px'}}
      responsive
      data={(data.data.slice(slicedata.start,slicedata.end)).reverse()}
      margin={{
        top: 20,
        right: 20,
        bottom: 50,
        left: 10,
      }}
    >
      <CartesianGrid stroke="#5d605de9" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="value" stroke="#385dc2" strokeWidth={2} name={data.name} />
      <XAxis dataKey="date" dataKey="date"
  angle={-90}
  textAnchor="end"
  interval={0}
  height={100}  height={120} label={{angle:-90}}/>
      <YAxis width="auto" label={{ value:data.unit, position: 'insideLeft', angle: -90,  }} />
      <Legend align="right"  />
      <Tooltip  itemStyle={{ color: "#385dc2", }}labelStyle={{
    color: "#385dc2", // Date/Label text color
  }} />
    </LineChart>
    <p className='text-primary'>Stock : <span className='text-secondary'>{data.name}</span></p>
    <p className='text-primary'>Time Interval : <span className='text-secondary'>{data.interval}</span></p>
    <p className='text-primary'>Unit Type : <span className='text-secondary'>{data.unit}</span></p>
    </div>

    ):(<div className='loadchart container text-light'><h2 className='pleasewait'>Please Wait <div className='dotloader'><span >. . .</span></div></h2></div>)}
    
    

    </>
  )
}

export default Chart