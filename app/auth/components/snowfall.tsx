"use client";

import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const createSnowflake = (): Snowflake => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: -10,
      size: Math.random() * 3 + 2,
      speed: Math.random() * 2 + 1,
    });

    const initialSnowflakes = Array.from({ length: 50 }, createSnowflake);
    setSnowflakes(initialSnowflakes);

    const interval = setInterval(() => {
      setSnowflakes((currentSnowflakes) =>
        currentSnowflakes.map((flake) => {
          const newY = flake.y + flake.speed;
          return newY > 100
            ? createSnowflake()
            : { ...flake, y: newY, x: flake.x + Math.sin(newY * 0.02) * 0.5 };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            left: `${flake.x}%`,
            top: `${flake.y}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}