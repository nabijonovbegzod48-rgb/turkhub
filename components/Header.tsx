"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type LangCode = "uz" | "tr" | "kk" | "en";

type Language = {
  code: LangCode;
  name: string;
  short: string;
  flag: string;
};

type SearchItem = {
  id: number;
  title: string;
  category: string;
  country: string;
  time: string;
};

type NotificationItem = {
  id: number;
  title: string;
  text: string;
  time: string;
  type: "breaking" | "news" | "system";
  read: boolean;
};

const LANGUAGES: Language[] = [
  {
    code: "uz",
    name: "O‘zbekcha",
    short: "UZ",
    flag: "🇺🇿",
  },
  {
    code: "tr",
    name: "Türkçe",
    short: "TR",
    flag: "🇹🇷",
  },
  {
    code: "kk",
    name: "Қазақша",
    short: "KZ",
    flag: "🇰🇿",
  },
  {
    code: "en",
    name: "English",
    short: "EN",
    flag: "🇬🇧",
  },
];

const NAV_ITEMS = [
  {
    uz: "Asosiy",
    tr: "Ana Sayfa",
    kk: "Басты бет",
    en: "Home",
    href: "",
  },
  {
    uz: "Siyosat",
    tr: "Siyaset",
    kk: "Саясат",
    en: "Politics",
    href: "politics",
  },
  {
    uz: "Iqtisodiyot",
    tr: "Ekonomi",
    kk: "Экономика",
    en: "Economy",
    href: "economy",
  },
  {
    uz: "Texnologiya",
    tr: "Teknoloji",
    kk: "Технология",
    en: "Technology",
    href: "technology",
  },
  {
    uz: "Madaniyat",
    tr: "Kültür",
    kk: "Мәдениет",
    en: "Culture",
    href: "culture",
  },
  {
    uz: "Sport",
    tr: "Spor",
    kk: "Спорт",
    en: "Sport",
    href: "sport",
  },
];

const SEARCH_DATA: SearchItem[] = [
  {
    id: 1,
    title: "Bir dunyo. Turfa hikoyalar.",
    category: "Madaniyat",
    country: "O‘zbekiston",
    time: "5 daqiqa",
  },
  {
    id: 2,
    title: "Mintaqaviy hamkorlik yangi bosqichga chiqmoqda",
    category: "Siyosat",
    country: "Turkiya",
    time: "4 daqiqa",
  },
  {
    id: 3,
    title: "Kelajak texnologiyalari mintaqada rivojlanmoqda",
    category: "Texnologiya",
    country: "Qozog‘iston",
    time: "5 daqiqa",
  },
  {
    id: 4,
    title: "Toshkentda yangi imkoniyatlar forumi bo‘lib o‘tdi",
    category: "Iqtisodiyot",
    country: "O‘zbekiston",
    time: "4 daqiqa",
  },
  {
    id: 5,
    title: "Qozog‘istonda noyob tabiat hududi muhofazaga olindi",
    category: "Ekologiya",
    country: "Qozog‘iston",
    time: "3 daqiqa",
  },
  {
    id: 6,
    title: "Turkiy jamoalar xalqaro maydonda yana birga",
    category: "Sport",
    country: "Turkiya",
    time: "3 daqiqa",
  },
  {
    id: 7,
    title: "Sun’iy intellekt: mintaqada yangi ilmiy markaz ochildi",
    category: "Texnologiya",
    country: "Turkmaniston",
    time: "4 daqiqa",
  },
  {
    id: 8,
    title: "Turkiy dunyo davlatlari o‘rtasida yangi kelishuv",
    category: "Siyosat",
    country: "Ozarbayjon",
    time: "2 daqiqa",
  },
];

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 1,
    title: "Muhim yangilik",
    text: "Turkiy dunyoda yangi muhim voqea yuz berdi.",
    time: "2 daqiqa oldin",
    type: "breaking",
    read: false,
  },
  {
    id: 2,
    title: "Yangi maqola",
    text: "Bugungi eng so‘nggi yangiliklar TurkHub’da.",
    time: "8 daqiqa oldin",
    type: "news",
    read: false,
  },
  {
    id: 3,
    title: "TurkHub",
    text: "Siz uchun yangi yangiliklar tayyorlandi.",
    time: "25 daqiqa oldin",
    type: "system",
    read: true,
  },
];

function getLanguageFromPath(pathname: string): LangCode {
  const first = pathname.split("/")[1];

  if (first === "tr") return "tr";
  if (first === "kk") return "kk";
  if (first === "en") return "en";

  return "uz";
}

function getText(
  lang: LangCode,
  values: {
    uz: string;
    tr: string;
    kk: string;
    en: string;
  },
) {
  return values[lang];
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = getLanguageFromPath(pathname);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [time, setTime] = useState("");

  const searchRef = useRef<HTMLDivElement | null>(null);
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const languageRef = useRef<HTMLDivElement | null>(null);

  const [notifications, setNotifications] = useState<NotificationItem[]>(
    INITIAL_NOTIFICATIONS,
  );

  const currentLanguage =
    LANGUAGES.find((item) => item.code === currentLang) ?? LANGUAGES[0];

  /*
   * REAL TIME CLOCK
   */
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const formatted = new Intl.DateTimeFormat("uz-UZ", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);

      setTime(formatted);
    };

    updateClock();

    const interval = window.setInterval(updateClock, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /*
   * DARK MODE
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem("turkhub-theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((previous) => {
      const next = !previous;

      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("turkhub-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("turkhub-theme", "light");
      }

      return next;
    });
  };

  /*
   * CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
   */
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        searchRef.current &&
        !searchRef.current.contains(target)
      ) {
        setSearchOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(target)
      ) {
        setNotificationsOpen(false);
      }

      if (
        languageRef.current &&
        !languageRef.current.contains(target)
      ) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /*
   * ESC CLOSE
   */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setNotificationsOpen(false);
        setLanguageOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /*
   * SEARCH
   */
  const searchResults = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    if (!query) {
      return SEARCH_DATA.slice(0, 5);
    }

    return SEARCH_DATA.filter((item) => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.country.toLowerCase().includes(query)
      );
    }).slice(0, 6);
  }, [searchValue]);

  const openSearch = () => {
    setSearchOpen(true);
    setNotificationsOpen(false);
    setLanguageOpen(false);
  };

  const handleSearchSubmit = () => {
    if (!searchValue.trim()) return;

    setSearchOpen(true);
  };

  /*
   * LANGUAGE CHANGE
   */
  const changeLanguage = (language: Language) => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      router.push(`/${language.code}`);
      return;
    }

    segments[0] = language.code;

    router.push(`/${segments.join("/")}`);

    setLanguageOpen(false);
    setMobileOpen(false);
  };

  /*
   * NOTIFICATIONS
   */
  const unreadCount = notifications.filter(
    (item) => !item.read,
  ).length;

  const markAllAsRead = () => {
    setNotifications((items) =>
      items.map((item) => ({
        ...item,
        read: true,
      })),
    );
  };

  const markNotificationRead = (id: number) => {
    setNotifications((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              read: true,
            }
          : item,
      ),
    );
  };

  const getNotificationIcon = (
    type: NotificationItem["type"],
  ) => {
    if (type === "breaking") {
      return "⚡";
    }

    if (type === "news") {
      return "📰";
    }

    return "✦";
  };

  return (
    <>
      <header className="th-header">
        <div className="th-header-inner">
          {/* TOP LINE */}
          <div className="th-topline">
            <div className="th-breadcrumb">
              TurkHub
              <span>/</span>
              <span>
                {getText(currentLang, {
                  uz: "Turkiy dunyo yangiliklari",
                  tr: "Türk dünyası haberleri",
                  kk: "Түркі әлемінің жаңалықтары",
                  en: "Turkic world news",
                })}
              </span>
            </div>

            <div className="th-top-right">
              <div className="th-clock">
                <span className="th-clock-dot" />
                <span>{time || "00:00:00"}</span>
              </div>

              <span className="th-live-text">
                {getText(currentLang, {
                  uz: "Jonli",
                  tr: "Canlı",
                  kk: "Тікелей",
                  en: "Live",
                })}
              </span>
            </div>
          </div>

          {/* MAIN HEADER */}
          <div className="th-main-header">
            {/* MOBILE MENU */}
            <button
              type="button"
              className="th-mobile-menu"
              aria-label="Menu"
              onClick={() => setMobileOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>

            {/* LOGO */}
            <Link
              href={`/${currentLang}`}
              className="th-logo"
              aria-label="TurkHub"
            >
              <span className="th-logo-symbol">
                ✤
              </span>

              <span className="th-logo-text">
                turkhub
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="th-nav">
              {NAV_ITEMS.map((item) => {
                const href = item.href
                  ? `/${currentLang}/${item.href}`
                  : `/${currentLang}`;

                const active =
                  item.href === ""
                    ? pathname === `/${currentLang}` ||
                      pathname === `/${currentLang}/`
                    : pathname.startsWith(href);

                return (
                  <Link
                    key={item.uz}
                    href={href}
                    className={`th-nav-link ${
                      active ? "active" : ""
                    }`}
                  >
                    {item[currentLang]}
                  </Link>
                );
              })}
            </nav>

            {/* ACTIONS */}
            <div className="th-actions">
              {/* SEARCH */}
              <div
                className="th-search-wrapper"
                ref={searchRef}
              >
                <button
                  type="button"
                  className={`th-action-button ${
                    searchOpen ? "active" : ""
                  }`}
                  aria-label="Search"
                  onClick={openSearch}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="6.5"
                    />
                    <path d="m16 16 5 5" />
                  </svg>
                </button>

                {searchOpen && (
                  <div className="th-search-panel">
                    <div className="th-search-header">
                      <div>
                        <span className="th-search-kicker">
                          TURKHUB SEARCH
                        </span>

                        <h3>
                          {getText(currentLang, {
                            uz: "Yangiliklarni qidiring",
                            tr: "Haberlerde ara",
                            kk: "Жаңалықтарды іздеу",
                            en: "Search news",
                          })}
                        </h3>
                      </div>

                      <button
                        type="button"
                        className="th-search-close"
                        onClick={() =>
                          setSearchOpen(false)
                        }
                      >
                        ×
                      </button>
                    </div>

                    <form
                      className="th-search-input-wrap"
                      onSubmit={(event) => {
                        event.preventDefault();
                        handleSearchSubmit();
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          cx="11"
                          cy="11"
                          r="6.5"
                        />
                        <path d="m16 16 5 5" />
                      </svg>

                      <input
                        autoFocus
                        value={searchValue}
                        onChange={(event) =>
                          setSearchValue(
                            event.target.value,
                          )
                        }
                        placeholder={getText(
                          currentLang,
                          {
                            uz: "Masalan: Turkiya, texnologiya...",
                            tr: "Örn: Türkiye, teknoloji...",
                            kk: "Мысалы: Түркия, технология...",
                            en: "For example: Turkey, technology...",
                          },
                        )}
                      />

                      {searchValue && (
                        <button
                          type="button"
                          className="th-input-clear"
                          onClick={() =>
                            setSearchValue("")
                          }
                        >
                          ×
                        </button>
                      )}
                    </form>

                    <div className="th-search-meta">
                      <span>
                        {searchValue
                          ? `${searchResults.length} ta natija`
                          : "Tavsiya etilgan yangiliklar"}
                      </span>

                      <span className="th-search-shortcut">
                        ESC
                      </span>
                    </div>

                    <div className="th-search-results">
                      {searchResults.length > 0 ? (
                        searchResults.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            className="th-search-result"
                            onClick={() => {
                              setSearchValue(
                                item.title,
                              );
                              setSearchOpen(false);
                            }}
                          >
                            <div className="th-search-result-image">
                              <span>◈</span>
                            </div>

                            <div className="th-search-result-content">
                              <div className="th-result-top">
                                <span>
                                  {item.category}
                                </span>

                                <small>
                                  {item.time}
                                </small>
                              </div>

                              <strong>
                                {item.title}
                              </strong>

                              <p>
                                {item.country}
                              </p>
                            </div>

                            <span className="th-result-arrow">
                              →
                            </span>
                          </button>
                        ))
                      ) : (
                        <div className="th-search-empty">
                          <div>⌕</div>

                          <strong>
                            Hech narsa topilmadi
                          </strong>

                          <span>
                            Boshqa kalit so‘z bilan
                            urinib ko‘ring.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* NOTIFICATIONS */}
              <div
                className="th-notification-wrapper"
                ref={notificationRef}
              >
                <button
                  type="button"
                  className={`th-action-button ${
                    notificationsOpen
                      ? "active"
                      : ""
                  }`}
                  aria-label="Notifications"
                  onClick={() => {
                    setNotificationsOpen(
                      (value) => !value,
                    );
                    setSearchOpen(false);
                    setLanguageOpen(false);
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                    <path d="M10 21h4" />
                  </svg>

                  {unreadCount > 0 && (
                    <span className="th-notification-count">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {notificationsOpen && (
                  <div className="th-notification-panel">
                    <div className="th-notification-header">
                      <div>
                        <span className="th-search-kicker">
                          TURKHUB
                        </span>

                        <h3>
                          {getText(currentLang, {
                            uz: "Bildirishnomalar",
                            tr: "Bildirimler",
                            kk: "Хабарламалар",
                            en: "Notifications",
                          })}
                        </h3>
                      </div>

                      {unreadCount > 0 && (
                        <button
                          type="button"
                          onClick={markAllAsRead}
                        >
                          {getText(currentLang, {
                            uz: "Barchasini o‘qish",
                            tr: "Tümünü oku",
                            kk: "Барлығын оқу",
                            en: "Mark all read",
                          })}
                        </button>
                      )}
                    </div>

                    <div className="th-notification-list">
                      {notifications.map(
                        (notification) => (
                          <button
                            key={notification.id}
                            type="button"
                            className={`th-notification-item ${
                              !notification.read
                                ? "unread"
                                : ""
                            }`}
                            onClick={() =>
                              markNotificationRead(
                                notification.id,
                              )
                            }
                          >
                            <div
                              className={`th-notification-icon ${notification.type}`}
                            >
                              {getNotificationIcon(
                                notification.type,
                              )}
                            </div>

                            <div className="th-notification-content">
                              <div className="th-notification-title">
                                <strong>
                                  {notification.title}
                                </strong>

                                {!notification.read && (
                                  <span className="th-unread-dot" />
                                )}
                              </div>

                              <p>
                                {notification.text}
                              </p>

                              <small>
                                {notification.time}
                              </small>
                            </div>
                          </button>
                        ),
                      )}
                    </div>

                    <div className="th-notification-footer">
                      <button type="button">
                        {getText(currentLang, {
                          uz: "Barcha bildirishnomalar",
                          tr: "Tüm bildirimler",
                          kk: "Барлық хабарламалар",
                          en: "All notifications",
                        })}

                        <span>→</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* LANGUAGE */}
              <div
                className="th-language-wrapper"
                ref={languageRef}
              >
                <button
                  type="button"
                  className="th-language-button"
                  onClick={() => {
                    setLanguageOpen(
                      (value) => !value,
                    );
                    setSearchOpen(false);
                    setNotificationsOpen(false);
                  }}
                >
                  <span className="th-globe">
                    ◎
                  </span>

                  <span>
                    {currentLanguage.short}
                  </span>

                  <span className="th-chevron">
                    ↓
                  </span>
                </button>

                {languageOpen && (
                  <div className="th-language-menu">
                    <div className="th-language-menu-title">
                      Tilni tanlang
                    </div>

                    {LANGUAGES.map((language) => (
                      <button
                        key={language.code}
                        type="button"
                        className={`th-language-item ${
                          language.code ===
                          currentLang
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          changeLanguage(language)
                        }
                      >
                        <span className="th-language-flag">
                          {language.flag}
                        </span>

                        <span className="th-language-name">
                          {language.name}
                        </span>

                        <span className="th-language-short">
                          {language.short}
                        </span>

                        {language.code ===
                          currentLang && (
                          <span className="th-check">
                            ✓
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* DARK MODE */}
              <button
                type="button"
                className="th-action-button th-theme-button"
                aria-label="Theme"
                onClick={toggleDarkMode}
              >
                {darkMode ? (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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
                    aria-hidden="true"
                  >
                    <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* MOBILE SEARCH */}
          {mobileOpen && (
            <div className="th-mobile-panel">
              <div className="th-mobile-search">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="6.5"
                  />
                  <path d="m16 16 5 5" />
                </svg>

                <input
                  placeholder="Yangiliklarni qidiring..."
                  value={searchValue}
                  onChange={(event) =>
                    setSearchValue(
                      event.target.value,
                    )
                  }
                  onFocus={() => setSearchOpen(true)}
                />
              </div>

              <nav className="th-mobile-nav">
                {NAV_ITEMS.map((item) => {
                  const href = item.href
                    ? `/${currentLang}/${item.href}`
                    : `/${currentLang}`;

                  return (
                    <Link
                      key={item.uz}
                      href={href}
                      onClick={() =>
                        setMobileOpen(false)
                      }
                    >
                      {item[currentLang]}
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}