import React from "react";
import { useLocation } from "react-router-dom";

const Newpage=()=>{
   
    let location=useLocation()
    return(
        <div>
          
            {location.state.name}
         
        </div>
    )
    }
export default Newpage;