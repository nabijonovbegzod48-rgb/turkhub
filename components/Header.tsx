
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  {
    label: "Turkiy dunyo",
    href: "/category/turkiy-dunyo",
  },
  {
    label: "Iqtisodiyot",
    href: "/category/iqtisodiyot",
  },
  {
    label: "Madaniyat",
    href: "/category/madaniyat",
  },
  {
    label: "Sayohat",
    href: "/category/sayohat",
  },
  {
    label: "Dunyo",
    href: "/category/dunyo",
  },
];

const languages = [
  {
    id: "uz",
    label: "O‘zbekcha",
    flag: "🇺🇿",
  },
  {
    id: "tr",
    label: "Türkçe",
    flag: "🇹🇷",
  },
  {
    id: "kz",
    label: "Қазақша",
    flag: "🇰🇿",
  },
  {
    id: "en",
    label: "English",
    flag: "🇬🇧",
  },
];

export default function Header() {
  const router = useRouter();

  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [languageOpen, setLanguageOpen] =
    useState(false);

  const [language, setLanguage] = useState("uz");

  const [notificationOpen, setNotificationOpen] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [notifications, setNotifications] =
    useState([
      {
        id: 1,
        title: "TurkHub'ga xush kelibsiz",
        text: "Eng so‘nggi yangiliklarni kuzating.",
        read: false,
      },
      {
        id: 2,
        title: "Yangi yangiliklar",
        text: "Markaziy Osiyoda yangi xabarlar paydo bo‘ldi.",
        read: false,
      },
      {
        id: 3,
        title: "Texnologiya",
        text: "Texnologiya bo‘limida yangi maqola.",
        read: false,
      },
    ]);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("turkhub-theme");

    const savedLanguage =
      localStorage.getItem("turkhub-language");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  function toggleTheme() {
    const nextTheme = !darkMode;

    setDarkMode(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("turkhub-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("turkhub-theme", "light");
    }
  }

  function selectLanguage(id: string) {
    setLanguage(id);
    localStorage.setItem(
      "turkhub-language",
      id
    );
    setLanguageOpen(false);
  }

  function submitSearch(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const value = search.trim();

    if (!value) return;

    setSearchOpen(false);
    setSearch("");
    router.push(
      `/search?q=${encodeURIComponent(value)}`
    );
  }

  function markAllRead() {
    setNotifications((items) =>
      items.map((item) => ({
        ...item,
        read: true,
      }))
    );
  }

  const selectedLanguage =
    languages.find((item) => item.id === language) ??
    languages[0];

  const unreadCount = notifications.filter(
    (item) => !item.read
  ).length;

  return (
    <>
      <div className="th-topbar">
        <div className="th-container th-topbar-inner">
          <div className="th-topbar-left">
            <span className="th-live-indicator">
              <i />
              Jonli
            </span>

            <span>
              Markaziy Osiyo va turkiy dunyo
              yangiliklari
            </span>
          </div>

          <div className="th-topbar-right">
            <span>Toshkent</span>
            <span>•</span>
            <span>Bugungi yangiliklar</span>
          </div>
        </div>
      </div>

      <header className="th-header">
        <div className="th-container th-header-main">
          <Link href="/" className="th-logo">
            <span className="th-logo-word">
              TURK
            </span>
            <span className="th-logo-accent">
              HUB
            </span>
            <span className="th-logo-dot" />
          </Link>

          <nav className="th-navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="th-actions">
            <button
              type="button"
              className="th-icon-button"
              aria-label="Qidirish"
              onClick={() =>
                setSearchOpen(true)
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                />
                <path d="m20 20-4-4" />
              </svg>
            </button>

            <div className="th-relative">
              <button
                type="button"
                className="th-icon-button th-notification-button"
                aria-label="Bildirishnomalar"
                onClick={() => {
                  setNotificationOpen(
                    !notificationOpen
                  );
                  setLanguageOpen(false);
                }}
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

                {unreadCount > 0 && (
                  <span className="th-notification-count">
                    {unreadCount}
                  </span>
                )}
              </button>

              {notificationOpen && (
                <div className="th-dropdown th-notification-menu">
                  <div className="th-dropdown-heading">
                    <strong>
                      Bildirishnomalar
                    </strong>

                    <button
                      type="button"
                      onClick={markAllRead}
                    >
                      Barchasini o‘qish
                    </button>
                  </div>

                  <div className="th-notification-list">
                    {notifications.map(
                      (item) => (
                        <div
                          key={item.id}
                          className={`th-notification-item ${
                            item.read
                              ? "is-read"
                              : ""
                          }`}
                        >
                          <div className="th-notification-symbol">
                            •
                          </div>

                          <div className="th-notification-text">
                            <strong>
                              {item.title}
                            </strong>

                            <span>
                              {item.text}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="th-language-wrap">
              <button
                type="button"
                className="th-language-button"
                onClick={() => {
                  setLanguageOpen(
                    !languageOpen
                  );
                  setNotificationOpen(false);
                }}
              >
                <span className="th-language-flag">
                  {selectedLanguage.flag}
                </span>

                <span>
                  {selectedLanguage.id.toUpperCase()}
                </span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {languageOpen && (
                <div className="th-language-menu">
                  <div className="th-language-title">
                    Tilni tanlang
                  </div>

                  {languages.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      className={`th-language-option ${
                        language === item.id
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        selectLanguage(
                          item.id
                        )
                      }
                    >
                      <span className="th-language-flag">
                        {item.flag}
                      </span>

                      <span>
                        {item.label}
                      </span>

                      {language ===
                        item.id && (
                        <span className="th-check">
                          ✓
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              className="th-icon-button"
              aria-label="Tema"
              onClick={toggleTheme}
            >
              {darkMode ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              className="th-icon-button th-mobile-button"
              aria-label="Menyu"
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                {mobileOpen ? (
                  <>
                    <path d="m6 6 12 12" />
                    <path d="m18 6-12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="th-container">
            <nav className="th-mobile-nav">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {searchOpen && (
        <div
          className="th-search-overlay"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setSearchOpen(false);
            }
          }}
        >
          <button
            type="button"
            className="th-search-close"
            onClick={() =>
              setSearchOpen(false)
            }
          >
            ✕
          </button>

          <div className="th-search-modal">
            <form
              className="th-search-form"
              onSubmit={submitSearch}
            >
              <input
                autoFocus
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder="Yangilik qidirish..."
                className="th-search-input"
              />

              <button
                type="submit"
                className="th-search-submit"
              >
                Qidirish
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

