// src/components/Game.tsx
import React, { useEffect, useState, useRef } from "react";
import Dino from "./Dino";
import Obstacle from "./Obstacle";

const Game: React.FC = () => {
  const [jumping, setJumping] = useState(false);
  const [obstacleLeft, setObstacleLeft] = useState(500);
  const [gameOver, setGameOver] = useState(false);
  const gameRef = useRef<number | null>(null);

  const jump = () => {
    if (!jumping) {
      setJumping(true);
      setTimeout(() => setJumping(false), 500);
    }
  };

  const checkCollision = () => {
    if (obstacleLeft < 90 && obstacleLeft > 30 && !jumping) {
      setGameOver(true);
      cancelAnimationFrame(gameRef.current!);
    }
  };

  const gameLoop = () => {
    setObstacleLeft((prev) => {
      const newLeft = prev - 5;
      return newLeft < -20 ? 500 : newLeft;
    });
    checkCollision();
    gameRef.current = requestAnimationFrame(gameLoop);
  };

  useEffect(() => {
    if (!gameOver) gameRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(gameRef.current!);
  }, [gameOver]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") jump();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "600px",
        height: "200px",
        border: "2px solid black",
        overflow: "hidden",
        margin: "50px auto",
        background: "#eee",
      }}
    >
      {!gameOver ? (
        <>
          <Dino jumping={jumping} />
          <Obstacle left={obstacleLeft} />
        </>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "80px" }}>Game Over</h2>
      )}
    </div>
  );
};

export default Game;
