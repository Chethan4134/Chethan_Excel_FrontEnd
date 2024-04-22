import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const FetchComp = () => {
    const [data,setData] = useState()
    useEffect( () => {
        apiFetch()
    },[])
    
    async function apiFetch()
    {
       const res =await axios.get("https://p-9x7e.onrender.com/products/products")
        console.log(res.data.data);
        setData(res.data.data)
    }

  return (
    <div>FetchComp</div>
  )
}
