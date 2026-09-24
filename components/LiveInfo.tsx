"use client";

import { useEffect, useState } from "react";

export default function LiveInfo() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("uz-UZ", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-info">
      <span>{time}</span>
      <span>•</span>
      <span>Toshkent</span>
      <span>24°C</span>
    </div>
  );
}