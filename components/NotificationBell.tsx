"use client";

import { useState } from "react";

type Notification = {
  id: number;
  title: string;
  text: string;
  time: string;
};

const notifications: Notification[] = [
  {
    id: 1,
    title: "Yangi yangiliklar",
    text: "Turkiy dunyodan yangi xabarlar qo‘shildi.",
    time: "5 daqiqa",
  },
  {
    id: 2,
    title: "TurkHub kurslari",
    text: "Yangi til kurslari bo‘limi ishga tushdi.",
    time: "18 daqiqa",
  },
  {
    id: 3,
    title: "Muhim xabar",
    text: "Markaziy Osiyo yangiliklarini kuzatib boring.",
    time: "1 soat",
  },
];

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [items, setItems] =
    useState<Notification[]>(notifications);

  function markAllRead() {
    setItems([]);
  }

  return (
    <div className="th-notification-wrap">
      <button
        className="th-icon-button"
        onClick={() => setOpen(!open)}
        aria-label="Bildirishnomalar"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path d="M10 21h4" />
        </svg>

        {items.length > 0 && (
          <span className="th-notification-count">
            {items.length}
          </span>
        )}
      </button>

      {open && (
        <>
          <div
            className="th-notification-backdrop"
            onClick={() => setOpen(false)}
          />

          <div className="th-notification-panel">
            <div className="th-notification-header">
              <div>
                <span className="th-overline">
                  TURKHUB
                </span>
                <h3>Bildirishnomalar</h3>
              </div>

              {items.length > 0 && (
                <button onClick={markAllRead}>
                  O‘qildi
                </button>
              )}
            </div>

            {items.length > 0 ? (
              <div className="th-notification-list">
                {items.map((item) => (
                  <div
                    className="th-notification-item"
                    key={item.id}
                  >
                    <div className="th-notification-dot" />

                    <div>
                      <strong>{item.title}</strong>

                      <p>{item.text}</p>

                      <small>{item.time} oldin</small>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="th-notification-empty">
                <span>✓</span>
                <h4>Hammasi o‘qilgan</h4>
                <p>
                  Hozircha yangi bildirishnomalar yo‘q.
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}