import React, { useState } from "react";

const ToggeleCotent = () => {
    const [toggle, setToggle] = useState(false)

    const toggleHandler = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <button onClick={toggleHandler}> 
            {toggle ? ("Hide Content") : ("Show Content")} 
            </button>
            {toggle && <p>Dynamic Rendering</p>}
        </div>
    )
}


export default ToggeleCotent