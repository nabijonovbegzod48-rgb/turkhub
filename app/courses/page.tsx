"use client";

import Link from "next/link";
import { useState } from "react";

type Course = {
  id: number;
  flag: string;
  language: string;
  title: string;
  description: string;
  level: string;
  lessons: number;
  duration: string;
};

const courses: Course[] = [
  {
    id: 1,
    flag: "🇷🇺",
    language: "Rus tili",
    title: "Rus tilini noldan o‘rganing",
    description:
      "Kundalik muloqot, grammatika va lug‘at asoslarini bosqichma-bosqich o‘rganing.",
    level: "A1 — C1",
    lessons: 48,
    duration: "12 hafta",
  },
  {
    id: 2,
    flag: "🇺🇸",
    language: "Ingliz tili",
    title: "English for real life",
    description:
      "Gapirish, tinglash, yozish va kundalik ingliz tilini amaliy mashqlar orqali o‘rganing.",
    level: "A1 — C1",
    lessons: 56,
    duration: "14 hafta",
  },
  {
    id: 3,
    flag: "🇹🇷",
    language: "Turk tili",
    title: "Türkçe'ni oson o‘rganing",
    description:
      "Turk tilida kundalik suhbat va grammatikani zamonaviy usulda o‘rganing.",
    level: "A1 — C1",
    lessons: 42,
    duration: "10 hafta",
  },
];

export default function CoursesPage() {
  const [selected, setSelected] =
    useState("all");

  const filtered =
    selected === "all"
      ? courses
      : courses.filter(
          (course) =>
            course.language === selected,
        );

  return (
    <main className="th-page">
      <div className="th-topbar">
        <div className="th-container th-topbar-inner">
          <p>
            TurkHub Academy · Til o‘rganish
          </p>

          <span>2026</span>
        </div>
      </div>

      <header className="th-header">
        <div className="th-container th-header-inner">
          <Link
            href="/uz"
            className="th-logo"
          >
            <span className="th-logo-symbol">
              ✣
            </span>

            <span className="th-logo-text">
              turk<span>hub</span>
            </span>
          </Link>

          <nav className="th-simple-nav">
            <Link href="/uz">
              Yangiliklar
            </Link>

            <Link
              href="/courses"
              className="active"
            >
              Kurslar
            </Link>

            <Link href="/hamkorlik">
              Hamkorlik
            </Link>
          </nav>
        </div>
      </header>

      <div className="th-container">
        <section className="th-courses-hero">
          <span className="th-overline">
            TURKHUB ACADEMY
          </span>

          <h1>
            Til o‘rganishning
            <br />
            yangi usuli.
          </h1>

          <p>
            Rus, ingliz va turk tillarini
            bosqichma-bosqich o‘rganing.
            O‘zingizga mos kursni tanlang.
          </p>
        </section>

        <div className="th-course-filters">
          <button
            className={
              selected === "all"
                ? "active"
                : ""
            }
            onClick={() =>
              setSelected("all")
            }
          >
            Barchasi
          </button>

          <button
            className={
              selected === "Rus tili"
                ? "active"
                : ""
            }
            onClick={() =>
              setSelected("Rus tili")
            }
          >
            🇷🇺 Rus tili
          </button>

          <button
            className={
              selected === "Ingliz tili"
                ? "active"
                : ""
            }
            onClick={() =>
              setSelected("Ingliz tili")
            }
          >
            🇺🇸 Ingliz tili
          </button>

          <button
            className={
              selected === "Turk tili"
                ? "active"
                : ""
            }
            onClick={() =>
              setSelected("Turk tili")
            }
          >
            🇹🇷 Turk tili
          </button>
        </div>

        <section className="th-course-grid">
          {filtered.map((course) => (
            <article
              className="th-course-card"
              key={course.id}
            >
              <div className="th-course-flag">
                {course.flag}
              </div>

              <span className="th-course-language">
                {course.language}
              </span>

              <h2>{course.title}</h2>

              <p>
                {course.description}
              </p>

              <div className="th-course-info">
                <div>
                  <span>Daraja</span>
                  <strong>
                    {course.level}
                  </strong>
                </div>

                <div>
                  <span>Darslar</span>
                  <strong>
                    {course.lessons}
                  </strong>
                </div>

                <div>
                  <span>Davomiyligi</span>
                  <strong>
                    {course.duration}
                  </strong>
                </div>
              </div>

              <button className="th-course-button">
                Kursni boshlash →
              </button>
            </article>
          ))}
        </section>

        <section className="th-course-bottom">
          <span className="th-overline">
            TEZ ORADA
          </span>

          <h2>
            Har bir kurs uchun
            <br />
            interaktiv darslar.
          </h2>

          <p>
            Video darslar, testlar, topshiriqlar,
            natijalar va shaxsiy progress tizimi
            keyingi bosqichlarda qo‘shiladi.
          </p>
        </section>

        <footer className="th-footer">
          <div className="th-footer-bottom">
            <span>
              © 2026 TurkHub Academy
            </span>

            <Link href="/uz">
              TurkHub News →
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}