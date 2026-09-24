
"use client";

import { useState } from "react";

const categories = [
  "Barchasi",
  "O‘zbekiston",
  "Markaziy Osiyo",
  "Turkiy dunyo",
  "Iqtisodiyot",
  "Texnologiya",
  "Sport",
  "Madaniyat",
  "Sayohat",
  "Dunyo",
];

export default function CategoryNav() {
  const [active, setActive] =
    useState("Barchasi");

  return (
    <section className="category-nav">
      <div className="container">
        <div className="category-nav-inner">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`category-link ${
                active === category
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActive(category)
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

