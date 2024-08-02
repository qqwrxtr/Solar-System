import React, { useState, useEffect } from 'react';
import './stars.css';

const Stars = () => {
  const numStars = 700;
  const [stars, setStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const getRandomSize = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const centerX = width / 2;
    const centerY = height / 2;

    const generatedStars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: getRandomSize(1, 2),
    }));

    setStars(generatedStars);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star, index) => {
        const distanceFromCenterX = Math.abs(star.x - window.innerWidth / 2);
        const distanceFromCenterY = Math.abs(star.y - window.innerHeight / 2);
        const distanceFromCenter = Math.sqrt(distanceFromCenterX ** 2 + distanceFromCenterY ** 2);
        
        const maxDistance = Math.sqrt((window.innerWidth / 2) ** 2 + (window.innerHeight / 2) ** 2);
        const movementFactor = distanceFromCenter / maxDistance;

        const distanceX = (mousePosition.x - window.innerWidth / 2) * movementFactor * 0.1;
        const distanceY = (mousePosition.y - window.innerHeight / 2) * movementFactor * 0.1;

        return (
          <div
            key={index}
            className="star"
            style={{
              position: 'absolute',
              left: `${star.x + distanceX}px`,
              top: `${star.y + distanceY}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: 'white',
              borderRadius: '50%',
              pointerEvents: 'none',
            }}
          />
        );
      })}
    </div>
  );
};

export default Stars;