import axios from 'axios'
import React, { useState } from 'react'

const Apis = () => {
    const [users, setusers] = useState([])
    const [users1, setusers1] = useState({})
    const [city, setcity] = useState("")

    let key = "67fe3dbd6f28d657f591dc7e70e1bc94"
    let endpoint = `https://api.coinbase.com/v2/currencies`
    let endpoint1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`


    const getData = () =>{
        axios.get(endpoint)
        .then((response)=>{
            console.log(response.data);
            setusers(response.data)
            console.log(users);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const getDataTwo = () =>{
        axios.get(endpoint1)
        .then((response)=>{
            console.log(response.data);
            setusers1(response.data)
            setcity("")
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  return (
    <>
        {/* <button onClick={getData}>Get Data</button> */}
        <input type="text" name="" id="" placeholder='City Name' onChange={(e)=>setcity(e.target.value)} value={city}/>
        <button onClick={getDataTwo}>Get Weather</button>
        
        {
            <p>{users.name}</p>
            // users.map((item)=>(
            //     <div key={item.id}>
            //         <small>{item.id}</small>
            //         <p><b>Name:</b> {item.name}</p>
            //         <p><b></b></p>
            //     </div>
            // ))
        }
        <div className='col-7 bg-info'>
            <h1>{users1.name}</h1>
            <h1>{users1.dt}</h1>
            <h1>{users1.cod}</h1>
            <h1>{users1.base}</h1>
        </div>
        
    </>
  )
}

export default Apis