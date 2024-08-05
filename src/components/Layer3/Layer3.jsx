import React, { useEffect, useState } from "react";
import planet3 from "./../../assets/img/Asset 11.svg";
import "./layer3.css";

const Layer3 = () => {
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
        const offsetX = (mousePosition.x - window.innerWidth / 2) * 0.01;
        const offsetY = (mousePosition.y - window.innerHeight / 2) * 0.01;
        return `translate(${offsetX}px, ${offsetY}px)`;
    };

    return (
        <div className="layer3">
            <img
                src={planet3}
                alt="Layer3"
                className="layer3"
                style={{ transform: calculateTransform() }}
            />
        </div>
    );
};

export default Layer3;
