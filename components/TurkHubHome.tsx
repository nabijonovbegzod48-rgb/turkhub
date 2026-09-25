"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import CurrencyTicker from "@/components/CurrencyTicker";
type Lang = "uz" | "tr" | "kz" | "en";

type NewsItem = {
  id: number;
  title: string;
  category: string;
  country: string;
  time: string;
  image: string;
  description: string;
};

const languages: {
  code: Lang;
  name: string;
  flag: string;
}[] = [
  { code: "uz", name: "O‘zbekcha", flag: "🇺🇿" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "kz", name: "Қазақша", flag: "🇰🇿" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

const translations = {
  uz: {
    slogan: "Markaziy Osiyo va turkiy dunyo yangiliklari",
    home: "Asosiy",
    politics: "Siyosat",
    economy: "Iqtisodiyot",
    technology: "Texnologiya",
    culture: "Madaniyat",
    sport: "Sport",
    search: "Yangiliklarni qidiring...",
    all: "Barchasi",
    uzbekistan: "O‘zbekiston",
    turkey: "Turkiya",
    kazakhstan: "Qozog‘iston",
    kyrgyzstan: "Qirg‘iziston",
    azerbaijan: "Ozarbayjon",
    turkmenistan: "Turkmaniston",
    latest: "So‘nggi yangiliklar",
    attention: "Kun diqqatida",
    popular: "Mashhur yangiliklar",
    results: "Qidiruv natijalari",
    noResults: "Hech qanday yangilik topilmadi.",
    minutes: "daqiqa",
    searchTitle: "Nimani qidiryapsiz?",
    close: "Yopish",
    homeMobile: "Bosh sahifa",
    searchMobile: "Qidiruv",
    sectionsMobile: "Bo‘limlar",
    language: "Til",
    popularSearches: "Mashhur qidiruvlar",
    recent: "So‘nggi qidiruv",
    clear: "Tozalash",
    categories: "Bo‘limlar",
    countries: "Davlatlar",
    pressEnter: "Enter bosing",
  },

  tr: {
    slogan: "Orta Asya ve Türk dünyasından haberler",
    home: "Ana sayfa",
    politics: "Siyaset",
    economy: "Ekonomi",
    technology: "Teknoloji",
    culture: "Kültür",
    sport: "Spor",
    search: "Haberlerde ara...",
    all: "Tümü",
    uzbekistan: "Özbekistan",
    turkey: "Türkiye",
    kazakhstan: "Kazakistan",
    kyrgyzstan: "Kırgızistan",
    azerbaijan: "Azerbaycan",
    turkmenistan: "Türkmenistan",
    latest: "Son haberler",
    attention: "Günün öne çıkanları",
    popular: "Popüler haberler",
    results: "Arama sonuçları",
    noResults: "Haber bulunamadı.",
    minutes: "dakika",
    searchTitle: "Ne arıyorsunuz?",
    close: "Kapat",
    homeMobile: "Ana sayfa",
    searchMobile: "Arama",
    sectionsMobile: "Bölümler",
    language: "Dil",
    popularSearches: "Popüler aramalar",
    recent: "Son aramalar",
    clear: "Temizle",
    categories: "Bölümler",
    countries: "Ülkeler",
    pressEnter: "Enter'a basın",
  },

  kz: {
    slogan: "Орталық Азия және түркі әлемінің жаңалықтары",
    home: "Басты бет",
    politics: "Саясат",
    economy: "Экономика",
    technology: "Технология",
    culture: "Мәдениет",
    sport: "Спорт",
    search: "Жаңалықтарды іздеу...",
    all: "Барлығы",
    uzbekistan: "Өзбекстан",
    turkey: "Түркия",
    kazakhstan: "Қазақстан",
    kyrgyzstan: "Қырғызстан",
    azerbaijan: "Әзербайжан",
    turkmenistan: "Түрікменстан",
    latest: "Соңғы жаңалықтар",
    attention: "Күннің басты жаңалықтары",
    popular: "Танымал жаңалықтар",
    results: "Іздеу нәтижелері",
    noResults: "Жаңалық табылмады.",
    minutes: "минут",
    searchTitle: "Нені іздеп жатырсыз?",
    close: "Жабу",
    homeMobile: "Басты бет",
    searchMobile: "Іздеу",
    sectionsMobile: "Бөлімдер",
    language: "Тіл",
    popularSearches: "Танымал іздеулер",
    recent: "Соңғы іздеулер",
    clear: "Тазалау",
    categories: "Бөлімдер",
    countries: "Мемлекеттер",
    pressEnter: "Enter басыңыз",
  },

  en: {
    slogan: "News from Central Asia and the Turkic world",
    home: "Home",
    politics: "Politics",
    economy: "Economy",
    technology: "Technology",
    culture: "Culture",
    sport: "Sport",
    search: "Search news...",
    all: "All",
    uzbekistan: "Uzbekistan",
    turkey: "Türkiye",
    kazakhstan: "Kazakhstan",
    kyrgyzstan: "Kyrgyzstan",
    azerbaijan: "Azerbaijan",
    turkmenistan: "Turkmenistan",
    latest: "Latest news",
    attention: "Top stories",
    popular: "Popular news",
    results: "Search results",
    noResults: "No news found.",
    minutes: "minutes",
    searchTitle: "What are you looking for?",
    close: "Close",
    homeMobile: "Home",
    searchMobile: "Search",
    sectionsMobile: "Sections",
    language: "Language",
    popularSearches: "Popular searches",
    recent: "Recent searches",
    clear: "Clear",
    categories: "Categories",
    countries: "Countries",
    pressEnter: "Press Enter",
  },
};

const news: NewsItem[] = [
  {
    id: 1,
    title: "Bir dunyo. Turfa hikoyalar.",
    category: "Madaniyat",
    country: "O‘zbekiston",
    time: "5",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=85",
    description:
      "Turkiy dunyoning boy madaniy merosi va yangi avlod hikoyalari.",
  },
  {
    id: 2,
    title: "Mintaqaviy hamkorlik yangi bosqichga chiqmoqda",
    category: "Siyosat",
    country: "Turkiya",
    time: "4",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=85",
    description:
      "Markaziy Osiyo mamlakatlari o‘rtasidagi hamkorlik yangi loyihalar bilan kengaymoqda.",
  },
  {
    id: 3,
    title: "Kelajak texnologiyalari rivojlanmoqda",
    category: "Texnologiya",
    country: "Qozog‘iston",
    time: "5",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=85",
    description:
      "Mintaqada sun’iy intellekt va zamonaviy texnologiyalar rivoji tezlashmoqda.",
  },
  {
    id: 4,
    title: "Toshkentda yangi imkoniyatlar forumi bo‘lib o‘tdi",
    category: "Iqtisodiyot",
    country: "O‘zbekiston",
    time: "4",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=85",
    description:
      "Yangi biznes imkoniyatlari va xalqaro hamkorlik masalalari muhokama qilindi.",
  },
  {
    id: 5,
    title: "Qozog‘istonda noyob tabiat hududi muhofazaga olindi",
    category: "Ekologiya",
    country: "Qozog‘iston",
    time: "3",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
    description:
      "Tabiatni muhofaza qilishga qaratilgan yangi loyiha ishga tushirildi.",
  },
  {
    id: 6,
    title: "Turkiya jamoalari xalqaro maydonda yana birga",
    category: "Sport",
    country: "Turkiya",
    time: "3",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85",
    description:
      "Sport olamida turkiy mamlakatlar jamoalari o‘zaro hamkorlik qilmoqda.",
  },
  {
    id: 7,
    title: "Sun’iy intellekt: mintaqada yangi ilmiy markaz ochildi",
    category: "Texnologiya",
    country: "Turkmaniston",
    time: "4",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85",
    description:
      "Ilmiy tadqiqotlar va sun’iy intellekt bo‘yicha yangi markaz o‘z faoliyatini boshladi.",
  },
  {
    id: 8,
    title: "Turkiy davlatlar o‘rtasida savdo hajmi oshmoqda",
    category: "Iqtisodiyot",
    country: "Ozarbayjon",
    time: "2",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=900&q=85",
    description:
      "Turkiy davlatlar o‘rtasidagi savdo va iqtisodiy aloqalar yangi bosqichga chiqmoqda.",
  },
  {
    id: 9,
    title: "Markaziy Osiyoda yangi transport yo‘laklari muhokama qilindi",
    category: "Siyosat",
    country: "Qirg‘iziston",
    time: "3",
    image:
      "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=900&q=85",
    description:
      "Yangi transport yo‘laklari mintaqadagi iqtisodiy aloqalarni yanada kuchaytirishi kutilmoqda.",
  },
];

const categoryKeys = [
  "home",
  "politics",
  "economy",
  "technology",
  "culture",
  "sport",
] as const;

export default function TurkHubHome({
  lang,
}: {
  lang: string;
}) {
  const router = useRouter();

  const currentLang: Lang =
    lang === "tr" || lang === "kz" || lang === "en"
      ? lang
      : "uz";

  const t = translations[currentLang];

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("all");
  const [category, setCategory] = useState("all");
  const [mobileMenu, setMobileMenu] = useState(false);

  const countries = [
    { id: "all", label: t.all },
    { id: "uz", label: t.uzbekistan },
    { id: "tr", label: t.turkey },
    { id: "kz", label: t.kazakhstan },
    { id: "kg", label: t.kyrgyzstan },
    { id: "az", label: t.azerbaijan },
    { id: "tm", label: t.turkmenistan },
  ];

  const filteredNews = useMemo(() => {
    let result = [...news];

    if (country !== "all") {
      const countryMap: Record<string, string> = {
        uz: "O‘zbekiston",
        tr: "Turkiya",
        kz: "Qozog‘iston",
        kg: "Qirg‘iziston",
        az: "Ozarbayjon",
        tm: "Turkmaniston",
      };

      result = result.filter(
        (item) => item.country === countryMap[country],
      );
    }

    if (category !== "all") {
      const categoryMap: Record<string, string> = {
        politics: "Siyosat",
        economy: "Iqtisodiyot",
        technology: "Texnologiya",
        culture: "Madaniyat",
        sport: "Sport",
      };

      result = result.filter(
        (item) => item.category === categoryMap[category],
      );
    }

    if (search.trim()) {
      const q = search.toLowerCase();

      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.country.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q),
      );
    }

    return result;
  }, [country, category, search]);

  const hero = news[0];
  const secondary = news.slice(1, 3);
  const latest = filteredNews.slice(0, 4);

  function changeLanguage(newLang: Lang) {
    router.push(`/${newLang}`);
  }

  function scrollToLatest() {
    document
      .getElementById("latest")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  function openSearchWith(value = "") {
    setSearch(value);
    setSearchOpen(true);
  }

  function handleSearchKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (e.key === "Escape") {
      setSearchOpen(false);
    }

    if (e.key === "Enter" && search.trim()) {
      setSearchOpen(false);

      setTimeout(() => {
        document
          .getElementById("latest")
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 150);
    }
  }

  return (
    <main className="th-page">
      {/* TOP BAR */}

      <div className="th-topbar">
        <div className="th-container th-topbar-inner">
          <p>{t.slogan}</p>

          <div className="th-top-actions">
            <span>25.09.2026</span>
            <span className="th-top-dot" />
            <span>14:25:36</span>
          </div>
        </div>
      </div>

      {/* HEADER */}

      <header className="th-header">
        <div className="th-container th-header-inner">
          <button
            className="th-mobile-menu"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>

          <button
            className="th-logo"
            onClick={() => router.push(`/${currentLang}`)}
          >
            <span className="th-logo-symbol">✣</span>

            <span className="th-logo-text">
              turk<span>hub</span>
            </span>
          </button>

          <nav className="th-main-nav">
            {categoryKeys.map((key) => (
              <button
                key={key}
                className={
                  key === "home" && category === "all"
                    ? "active"
                    : ""
                }
                onClick={() => {
                  if (key === "home") {
                    setCategory("all");
                  } else {
                    setCategory(key);
                  }

                  scrollToLatest();
                }}
              >
                {t[key]}
              </button>
            ))}
          </nav>

          <div className="th-header-actions">
            <button
              className="th-search-button"
              onClick={() => openSearchWith()}
              aria-label="Search"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </button>

            <div className="th-language">
              <span>◎</span>

              <select
                value={currentLang}
                onChange={(e) =>
                  changeLanguage(e.target.value as Lang)
                }
              >
                {languages.map((item) => (
                  <option
                    key={item.code}
                    value={item.code}
                  >
                    {item.code.toUpperCase()} —{" "}
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {mobileMenu && (
          <div className="th-mobile-menu-panel">
            {categoryKeys.map((key) => (
              <button
                key={key}
                onClick={() => {
                  if (key === "home") {
                    setCategory("all");
                  } else {
                    setCategory(key);
                  }

                  setMobileMenu(false);
                  scrollToLatest();
                }}
              >
                {t[key]}
              </button>
            ))}
          </div>
        )}
      </header>
      <CurrencyTicker lang={currentLang} />

      <div className="th-container">
        {/* COUNTRY NAV */}

        <div className="th-country-scroll">
          {countries.map((item) => (
            <button
              key={item.id}
              className={
                country === item.id ? "active" : ""
              }
              onClick={() => {
                setCountry(item.id);
                scrollToLatest();
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* HERO */}

        <section className="th-hero-grid">
          <article className="th-hero-card">
            <img
              src={hero.image}
              alt={hero.title}
            />

            <div className="th-image-overlay" />

            <div className="th-hero-content">
              <span className="th-label">
                {hero.category}
              </span>

              <h1>{hero.title}</h1>

              <p>{hero.description}</p>

              <div className="th-card-meta">
                <span>{hero.country}</span>
                <span>•</span>
                <span>
                  {hero.time} {t.minutes}
                </span>
              </div>
            </div>

            <div className="th-arrow">→</div>
          </article>

          <div className="th-secondary-column">
            {secondary.map((item) => (
              <article
                className="th-secondary-card"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="th-image-overlay" />

                <div className="th-secondary-content">
                  <span className="th-label">
                    {item.category}
                  </span>

                  <h2>{item.title}</h2>

                  <div className="th-card-meta">
                    <span>{item.country}</span>
                    <span>•</span>
                    <span>
                      {item.time} {t.minutes}
                    </span>
                  </div>
                </div>

                <div className="th-small-arrow">
                  →
                </div>
              </article>
            ))}
          </div>

          <aside className="th-attention">
            <div className="th-section-heading">
              <h2>{t.attention}</h2>
              <span />
            </div>

            {[news[7], news[8], news[4]].map(
              (item, index) => (
                <div
                  className="th-attention-item"
                  key={item.id}
                >
                  <span className="th-number">
                    0{index + 1}
                  </span>

                  <div>
                    <span className="th-mini-category">
                      {item.category}
                    </span>

                    <h3>{item.title}</h3>

                    <p>
                      {item.country} · {item.time}{" "}
                      {t.minutes}
                    </p>
                  </div>
                </div>
              ),
            )}
          </aside>
        </section>

        {/* LATEST */}

        <section
          id="latest"
          className="th-latest-section"
        >
          <div className="th-section-top">
            <div>
              <span className="th-overline">
                TURKHUB
              </span>

              <h2>
                {search ? t.results : t.latest}
              </h2>
            </div>

            <div className="th-sort">
              <button
                className={
                  category === "all" ? "active" : ""
                }
                onClick={() =>
                  setCategory("all")
                }
              >
                {t.all}
              </button>

              <button
                className={
                  category === "politics"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCategory("politics")
                }
              >
                {t.politics}
              </button>

              <button
                className={
                  category === "technology"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCategory("technology")
                }
              >
                {t.technology}
              </button>
            </div>
          </div>

          {latest.length > 0 ? (
            <div className="th-news-grid">
              {latest.map((item) => (
                <article
                  className="th-news-card"
                  key={item.id}
                >
                  <div className="th-news-image">
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  </div>

                  <div className="th-news-content">
                    <span className="th-news-category">
                      {item.category}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <div className="th-news-meta">
                      <span>{item.country}</span>
                      <span>•</span>
                      <span>
                        {item.time} {t.minutes}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="th-no-results">
              <div>⌕</div>

              <h3>{t.noResults}</h3>

              <p>{t.search}</p>
            </div>
          )}
        </section>

        {/* MORE NEWS */}

        <section className="th-more-section">
          <div className="th-section-top">
            <div>
              <span className="th-overline">
                TURKHUB
              </span>

              <h2>{t.popular}</h2>
            </div>
          </div>

          <div className="th-more-grid">
            {news.slice(4, 9).map((item) => (
              <article
                className="th-more-card"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="th-more-body">
                  <span>{item.category}</span>

                  <h3>{item.title}</h3>

                  <div>
                    {item.country} · {item.time}{" "}
                    {t.minutes}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER */}

        <footer className="th-footer">

          {/* KURSLAR VA HAMKORLIK */}

          <div className="th-footer-special">
            <Link
              href="/courses"
              className="th-footer-special-card th-footer-course"
            >
              <div className="th-footer-special-icon">
                🎓
              </div>

              <div className="th-footer-special-content">
                <span className="th-footer-special-label">
                  TA’LIM
                </span>

                <strong>Kurslar</strong>

                <p>
                  Yangi bilim va ko‘nikmalarni
                  rivojlantiring
                </p>
              </div>

              <span className="th-footer-special-arrow">
                →
              </span>
            </Link>

            <Link
              href="/hamkorlik"
              className="th-footer-special-card th-footer-partner"
            >
              <div className="th-footer-special-icon">
                🤝
              </div>

              <div className="th-footer-special-content">
                <span className="th-footer-special-label">
                  HAMKORLIK
                </span>

                <strong>Hamkorlik</strong>

                <p>
                  Biz bilan yangi loyihalarni
                  boshlang
                </p>
              </div>

              <span className="th-footer-special-arrow">
                →
              </span>
            </Link>
          </div>

          {/* MAIN FOOTER */}

          <div className="th-footer-main">
            <div>
              <div className="th-footer-logo">
                <span>✣</span>
                turk<span>hub</span>
              </div>

              <p>{t.slogan}</p>
            </div>

            <div className="th-footer-links">
              <div>
                <strong>{t.home}</strong>

                <button>
                  {t.politics}
                </button>

                <button>
                  {t.economy}
                </button>
              </div>

              <div>
                <strong>
                  {t.technology}
                </strong>

                <button>
                  {t.culture}
                </button>

                <button>
                  {t.sport}
                </button>
              </div>

              <div>
                <strong>{t.language}</strong>

                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() =>
                      changeLanguage(
                        item.code,
                      )
                    }
                  >
                    {item.flag} {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}

          <div className="th-footer-bottom">
            <span>
              © 2026 TurkHub. All rights
              reserved.
            </span>

            <span>
              Central Asia · Turkic World
            </span>
          </div>
        </footer>
      </div>

      {/* =====================================================
          PREMIUM SEARCH
      ===================================================== */}

      {searchOpen && (
        <div
          className="th-command-search"
          onClick={() =>
            setSearchOpen(false)
          }
        >
          <div
            className="th-command-window"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            {/* SEARCH TOP */}

            <div className="th-command-top">
              <div className="th-command-brand">
                <span className="th-command-logo">
                  ✣
                </span>

                <div>
                  <span>TURKHUB</span>

                  <small>
                    {t.searchTitle}
                  </small>
                </div>
              </div>

              <button
                className="th-command-close"
                onClick={() =>
                  setSearchOpen(false)
                }
              >
                <span>ESC</span>
                ×
              </button>
            </div>

            {/* BIG SEARCH INPUT */}

            <div className="th-command-input">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                />

                <path d="m20 20-4-4" />
              </svg>

              <input
                autoFocus
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                onKeyDown={
                  handleSearchKeyDown
                }
                placeholder={t.search}
              />

              {search ? (
                <button
                  className="th-command-clear"
                  onClick={() =>
                    setSearch("")
                  }
                >
                  ×
                </button>
              ) : (
                <span className="th-command-enter">
                  {t.pressEnter}
                </span>
              )}
            </div>

            {/* SEARCH CONTENT */}

            {!search ? (
              <div className="th-command-discovery">
                <div className="th-command-block">
                  <div className="th-command-heading">
                    <span>
                      {t.popularSearches}
                    </span>

                    <i />
                  </div>

                  <div className="th-command-tags">
                    {[
                      "O‘zbekiston",
                      "Turkiya",
                      "Texnologiya",
                      "Iqtisodiyot",
                      "Sun’iy intellekt",
                      "Markaziy Osiyo",
                    ].map((item) => (
                      <button
                        key={item}
                        onClick={() =>
                          openSearchWith(
                            item,
                          )
                        }
                      >
                        <span>⌕</span>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="th-command-columns">
                  <div className="th-command-block">
                    <div className="th-command-heading">
                      <span>
                        {t.categories}
                      </span>

                      <i />
                    </div>

                    <div className="th-command-list">
                      {[
                        t.politics,
                        t.economy,
                        t.technology,
                        t.culture,
                        t.sport,
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() =>
                            openSearchWith(
                              item,
                            )
                          }
                        >
                          <span>→</span>
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="th-command-block">
                    <div className="th-command-heading">
                      <span>
                        {t.countries}
                      </span>

                      <i />
                    </div>

                    <div className="th-command-list">
                      {countries
                        .filter(
                          (item) =>
                            item.id !==
                            "all",
                        )
                        .map((item) => (
                          <button
                            key={item.id}
                            onClick={() =>
                              openSearchWith(
                                item.label,
                              )
                            }
                          >
                            <span>+</span>
                            {item.label}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="th-command-results">
                <div className="th-command-results-top">
                  <span>
                    {filteredNews.length}{" "}
                    {t.results.toLowerCase()}
                  </span>
                </div>

                {filteredNews.length >
                0 ? (
                  filteredNews.map(
                    (item) => (
                      <button
                        className="th-command-result"
                        key={item.id}
                        onClick={() => {
                          setSearchOpen(
                            false,
                          );

                          setTimeout(
                            () => {
                              document
                                .getElementById(
                                  "latest",
                                )
                                ?.scrollIntoView(
                                  {
                                    behavior:
                                      "smooth",
                                  },
                                );
                            },
                            150,
                          );
                        }}
                      >
                        <img
                          src={
                            item.image
                          }
                          alt=""
                        />

                        <div className="th-command-result-text">
                          <div>
                            <span>
                              {
                                item.category
                              }
                            </span>

                            <small>
                              {
                                item.country
                              }{" "}
                              ·{" "}
                              {
                                item.time
                              }{" "}
                              {
                                t.minutes
                              }
                            </small>
                          </div>

                          <strong>
                            {item.title}
                          </strong>

                          <p>
                            {
                              item.description
                            }
                          </p>
                        </div>

                        <span className="th-command-result-arrow">
                          →
                        </span>
                      </button>
                    ),
                  )
                ) : (
                  <div className="th-command-empty">
                    <span>⌕</span>

                    <h3>
                      {t.noResults}
                    </h3>

                    <p>
                      {t.search}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* SEARCH FOOTER */}

            <div className="th-command-footer">
              <span>
                <kbd>ESC</kbd>{" "}
                {t.close}
              </span>

              <span>
                <kbd>ENTER</kbd>{" "}
                {t.results}
              </span>

              <strong>
                TURK<span>HUB</span>
              </strong>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE BOTTOM NAV */}

      <nav className="th-mobile-bottom">
        <button
          className={
            !searchOpen ? "active" : ""
          }
          onClick={() => {
            setCategory("all");

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <span>⌂</span>
          {t.homeMobile}
        </button>

        <button
          onClick={() =>
            openSearchWith()
          }
        >
          <span>⌕</span>
          {t.searchMobile}
        </button>

        <button
          onClick={() =>
            document
              .getElementById("latest")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
        >
          <span>▦</span>
          {t.sectionsMobile}
        </button>
      </nav>
    </main>
  );
}