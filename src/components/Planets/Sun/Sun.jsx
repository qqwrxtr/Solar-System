import React from "react";
import "./sun.css";
import sungif from "./../../../assets/planets_gif/sun.gif"

const Sun = () => {
    return ( 
        <div className="sun">
            <img src={sungif} alt="sun" />
        </div>
     );
}
 
export default Sun;