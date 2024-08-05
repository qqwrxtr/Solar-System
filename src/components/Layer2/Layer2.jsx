import React, { useEffect, useState } from "react";
import planet11 from "./../../assets/img/planet2.png";
import planet22 from "./../../assets/img/Asset 34.svg";
import planet33 from "./../../assets/img/Asset 11.svg";
import planet44 from "./../../assets/img/Asset 24.svg";
import planet55 from "./../../assets/img/Asset 35.svg";
import planet66 from "./../../assets/img/Asset 16.svg";

import "./layer2.css";

const Layer2 = () => {
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
        const offsetX = (mousePosition.x - window.innerWidth / 2) * 0.05;
        const offsetY = (mousePosition.y - window.innerHeight / 2) * 0.05;
        return `translate(${offsetX}px, ${offsetY}px)`;
    };

    const planets = {
        planet11: {
            className: "planet11",
            alt: "Planet 11",
            src: planet11,
        },
        planet21: {
            className: "planet22",
            alt: "Planet 22",
            src: planet22,
        },
        planet31: {
            className: "planet33",
            alt: "Planet 33",
            src: planet33,
        },
        planet41: {
            className: "planet44",
            alt: "Planet 44",
            src: planet44,
        },
        planet51: {
            className: "planet55",
            alt: "Planet 55",
            src: planet55,
        },
        planet61: {
            className: "planet66",
            alt: "Planet 66",
            src: planet66,
        },
    };

    return (
        <div className="layer2">
            {Object.entries(planets).map(([key, planet], index) => (
                <div key={key} tabIndex={index} className={planet.className}>
                    <img
                        src={planet.src}
                        alt={planet.alt}
                        className={planet.className}
                        style={{ transform: calculateTransform() }}
                    />
                </div>
            ))}
        </div>
    );
};

export default Layer2;
