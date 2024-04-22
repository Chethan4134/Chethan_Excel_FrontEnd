import React from 'react'
import { withLogger } from '../uils/withLogger'



 export const MyComponent = ({message}) => {
  return (
    <div>{message}</div>
  )
}

const EnhancedCmponent = withLogger(MyComponent)


export default EnhancedCmponent


