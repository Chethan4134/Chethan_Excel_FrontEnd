// import React, { useEffect, useState } from 'react'

// const Use = () => {
//     const [count,setCount] = useState(0)
//     useEffect(() => {
//         console.log("Use Effect 1");
//     },[count])
//   return (
//         <div>
            
//         </div>
//   )
// }

import React, { useState } from 'react'

const Use = () => {
    const [count,setCount] = useState[
        {
            id: 1,
            name : "jhon",
            marks :70, 
        },
        {
            id : 2,
            name : "Robert",
            marks : 45
        }
    ]

  return (
    <div>
        <h2>
            User Details
        </h2>
        <ul>
            {Data.map(user) =>{
                return <li>{user.name}</li>
            }}
            
        </ul>
    </div>
  )
}
export default Use
