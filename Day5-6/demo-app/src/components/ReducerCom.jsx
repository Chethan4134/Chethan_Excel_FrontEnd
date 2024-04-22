import React, { useReducer } from 'react'

const initialValue = {count : 0}

const reducer = (state,action) =>{
    switch (action.type) {
        case "Increment":
            return { count : state.count+1}
        case "Decrement":
            return {count :state.count-1}
        case "Reset":
            return {count:0}
        
        default:
            return state;
    }
}


export const ReducerCom = () => {
const [state,dispatcher] = useReducer(reducer,initialValue)   //destucting   and dispatcher is a state
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=> dispatcher ({type : "Increment"})}>Increment</button>
        <button onClick={()=> dispatcher ({type : "Decrement"})}>Decrement</button>
        <button onClick={()=> dispatcher ({type : "Reset"})}>Reset</button>

    </div>
  )
}

