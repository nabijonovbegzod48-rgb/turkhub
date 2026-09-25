"use client";

import { useEffect, useState } from "react";

export default function LiveDateTime() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const dateText = new Intl.DateTimeFormat("uz-UZ", {
        timeZone: "Asia/Tashkent",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(now);

      const timeText = new Intl.DateTimeFormat("uz-UZ", {
        timeZone: "Asia/Tashkent",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);

      setDate(dateText);
      setTime(timeText);
    };

    updateDateTime();

    const interval = window.setInterval(
      updateDateTime,
      1000,
    );

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="th-top-actions">
      <time>{date}</time>

      <span className="th-top-dot" />

      <time>{time}</time>
    </div>
  );
}