import React, { useContext } from 'react'
import {DataContext} from './Parent'

export const GrandChild = () => {

    const [data,setData] = useContext(DataContext)
  return (
    <div>
        <h1>
            {data}
        </h1>
        <button onClick={() => setData(data+1)}> Increment</button>

    </div>
  )
}

export default GrandChild