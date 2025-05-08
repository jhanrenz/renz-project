// src/components/Dino.tsx
import React from "react";

interface DinoProps {
  jumping: boolean;
}

const Dino: React.FC<DinoProps> = ({ jumping }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: jumping ? "150px" : "0px",
        left: "50px",
        width: "40px",
        height: "40px",
        backgroundColor: "black",
        transition: "bottom 0.2s",
      }}
    />
  );
};

export default Dino;
