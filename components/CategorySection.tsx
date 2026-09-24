"use client";

import Link from "next/link";
import { categories } from "@/data/news";
import { usePathname } from "next/navigation";

export default function CategoryNav() {
  const pathname = usePathname();

  return (
    <section className="category-section">
      <div className="category-inner">

        <div className="category-label">
          Kategoriyalar
        </div>

        <div className="category-list">
          {categories.map((category) => {
            const active =
              pathname === `/category/${category.slug}`;

            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`category-link ${
                  active ? "active" : ""
                }`}
              >
                <span className="category-number">
                  {category.icon}
                </span>

                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}