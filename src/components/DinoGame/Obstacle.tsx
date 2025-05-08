// src/components/Obstacle.tsx
import React from "react";

interface ObstacleProps {
  left: number;
}

const Obstacle: React.FC<ObstacleProps> = ({ left }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: `${left}px`,
        width: "20px",
        height: "40px",
        backgroundColor: "green",
      }}
    />
  );
};

export default Obstacle;
