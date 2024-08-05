import React, { useEffect, useState } from "react";
import planet1 from "./../../assets/img/Asset 44.svg";
import planet2 from "./../../assets/img/Asset 10.svg";
import planet3 from "./../../assets/img/Asset 12.svg"
import planet4 from "./../../assets/img/Asset 52.svg"
import planet5 from "./../../assets/img/Asset 32.svg"


import "./layer1.css";

const Layer1 = () => {
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
        const offsetX = (mousePosition.x - window.innerWidth / 2) * 0.1;
        const offsetY = (mousePosition.y - window.innerHeight / 2) * 0.1;
        return `translate(${offsetX}px, ${offsetY}px)`;
    };

    const planets = {
        planet1: {
            className: "planet1",
            alt: "Planet 1",
            src: planet1,
        },
        planet2: {
            className: "planet2",
            alt: "Planet 2",
            src: planet2,
        },
        planet3: {
            className: "planet3",
            alt: "Planet 3",
            src: planet3,
        },
        planet4: {
            className: "planet4",
            alt: "Planet 4",
            src: planet4,
        },
        planet5: {
            className: "planet5",
            alt: "Planet 5",
            src: planet5,
        },
    };

    return (
        <div className="layer1">
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

export default Layer1;
