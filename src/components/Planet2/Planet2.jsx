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
        const offsetX = (window.innerWidth / 2 - mousePosition.x) * 0.1;
        const offsetY = (window.innerHeight / 2 - mousePosition.y) * 0.1;
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
