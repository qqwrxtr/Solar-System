import React, { useEffect, useState } from "react";
import astronaut from "./../../assets/img/astronaut.png";
import "./astronaut.css";
import Planet from "../Planet/Planet";
import Planet2 from "../Planet2/Planet2";

const Astronaut = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const calculateTransform = () => {
        const offsetX = (mousePosition.x - window.innerWidth / 2) * -0.05;
        const offsetY = (mousePosition.y - window.innerHeight / 2) * -0.05;
        return `translate(${offsetX}px, ${offsetY}px)`;
    };

    return (
        <>
        <div className="astronaut">
            <img
                src={astronaut}
                alt="Astronaut"
                className="astronaut"
                style={{ transform: calculateTransform() }}
            />
        </div>
        </>
    );
};

export default Astronaut;
