import React from "react";
import "./solarsystem.css"
import Sun from "../Planets/Sun/Sun";
import Terra from "../Planets/Terra/Terra";



const SolarSystem = () => {
    return ( 
        <div className="solar_system">
                <Sun/>
                <Terra/>
        </div>
     );
}
 
export default SolarSystem;