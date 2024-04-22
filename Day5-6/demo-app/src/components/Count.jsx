// import React, { useState } from "react";

// const Counter = () =>{
//     const [count, setCount] = useState(0)
    
//     return(
//             <div>
//                 <h1>{count}</h1>
//                 <button onClick={()=> setCount(count+1)}>Increment</button>
//                 <button onClick={()=> setCount(count-1)}>Decrement</button>
//                 <button onClick={()=> setCount(0)}>Reset</button>
//             </div>
//     )
// }

// export default Counter

//--------------------------------------------------------------------------------------
//Dynamic counetr

// import React from "react";

// const Count = ({isLoggedIn}) =>{    //destructuring is happen in this Function
//     return (
//         <div>
//             {isLoggedIn ? (<p> Welcome User</p>) : (<p> Please login</p>)}
//         </div>
//     )
// }

// export default Count
//-----------------------------------------------------------------------------------------------

//Without using the ternory operator

// import React from "react";

// const Count = ({isLoggedIn}) =>{    //destructuring is happen in this Function
//     return (
//         <div>
//             {isLoggedIn && (<p> Welcome User</p>) }
//         </div>
//     )
// }

// export default Count

//-------------------------------------------------------------------------------------------------


import React from "react";
import Heading from "./Heading";
import Table from "./Table";

const Count = ({isLoggedIn}) =>{
    const Component = isLoggedIn ? Heading : Table;
    return<Component/>
}

export default Count

//--------------------------------------------------------------------------------------------------
 
