import React, { useEffect, useState } from "react";
import planet111 from "./../../assets/img/Asset 38.svg";
import planet222 from "./../../assets/img/Asset 39.svg";
import planet333 from "./../../assets/img/Asset 42.svg";
import planet444 from "./../../assets/img/Asset 45.svg";
import planet555 from "./../../assets/img/Asset 49.svg";
import planet666 from "./../../assets/img/Asset 60.svg";
import planet777 from "./../../assets/img/Asset 50.svg";


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
        const offsetX = (mousePosition.x - window.innerWidth / 2) * 0.02;
        const offsetY = (mousePosition.y - window.innerHeight / 2) * 0.02;
        return `translate(${offsetX}px, ${offsetY}px)`;
    };

    const planets = {
        planet111: {
            className: "planet111",
            alt: "Planet 111",
            src: planet111,
        },
        planet211: {
            className: "planet222",
            alt: "Planet 222",
            src: planet222,
        },
        planet311: {
            className: "planet333",
            alt: "Planet 333",
            src: planet333,
        },
        planet411: {
            className: "planet444",
            alt: "Planet 444",
            src: planet444,
        },
        planet511: {
            className: "planet555",
            alt: "Planet 555",
            src: planet555,
        },
        planet611: {
            className: "planet666",
            alt: "Planet 666",
            src: planet666,
        },
        planet711: {
            className: "planet777",
            alt: "Planet 777",
            src: planet555,
        },
        planet811: {
            className: "planet888",
            alt: "Planet 888",
            src: planet777,
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

export default Layer3;
