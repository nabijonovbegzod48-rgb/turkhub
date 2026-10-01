"use client";

import Link from "next/link";

type SectionPageProps = {
  title: string;
  description: string;
  lang: string;
};

export default function SectionPage({
  title,
  description,
  lang,
}: SectionPageProps) {
  return (
    <main className="section-page">

      <header className="section-page-header">

        <Link
          href={`/${lang}`}
          className="section-page-logo"
        >
          <span>✣</span>

          turk
          <b>hub</b>
        </Link>

      </header>

      <div className="section-page-content">

        <span className="section-page-overline">
          TURKHUB
        </span>

        <h1>
          {title}
        </h1>

        <p>
          {description}
        </p>

        <div className="section-page-placeholder">

          <div className="section-page-icon">
            ◌
          </div>

          <h2>
            Yangiliklar tez orada
          </h2>

          <p>
            Ushbu bo‘lim uchun alohida
            kontent tizimi ishlab chiqilmoqda.
          </p>

        </div>

      </div>

    </main>
  );
}