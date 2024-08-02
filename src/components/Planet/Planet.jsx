import React, { useEffect, useState } from "react";
import planet from "./../../assets/img/planet.jpg";
import "./planet.css";

const Planet = () => {
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
        const offsetX = (mousePosition.x - window.innerWidth / 2) * 0.09;
        const offsetY = (mousePosition.y - window.innerHeight / 2) * 0.09;
        return `translate(${offsetX}px, ${offsetY}px)`;
    };

    return (
        <div className="planet">
            <img
                src={planet}
                alt="Planet"
                className="planet"
                style={{ transform: calculateTransform() }}
            />
        </div>
    );
};

export default Planet;
