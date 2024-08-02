import React, { useEffect, useState } from "react";
import planet from "./../../assets/img/planet2.png";
import "./planet2.css";

const Planet2 = () => {
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
        const offsetX = (mousePosition.x - window.innerWidth / 2) * 0.25;
        const offsetY = (mousePosition.y - window.innerHeight / 2) * 0.15;
        return `translate(${offsetX}px, ${offsetY}px)`;
    };

    return (
        <div className="planet2">
            <img
                src={planet}
                alt="Planet2"
                className="planet2"
                style={{ transform: calculateTransform() }}
            />
        </div>
    );
};

export default Planet2;
