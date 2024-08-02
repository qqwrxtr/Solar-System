import React from "react";
import "./terra.css";
import terragif from "./../../../assets/planets_gif/terra.gif"

const Terra = () => {
    return ( 
        <div className="terra">
            <img src={terragif} alt="terra" />
        </div>
     );
}
 
export default Terra;