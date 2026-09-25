"use client";

import { useMemo, useState } from "react";

type Lang = "uz" | "tr" | "kz" | "en";

type Currency = {
  code: string;
  name: string;
  nameEn: string;
  flag: string;
  rate: string;
  diff: number;
  nominal: number;
};

type CurrencyTickerProps = {
  lang?: Lang;
};

const currencies: Currency[] = [
  {
    code: "USD",
    name: "AQSH dollari",
    nameEn: "US Dollar",
    flag: "🇺🇸",
    rate: "11 830.87",
    diff: 12.45,
    nominal: 1,
  },
  {
    code: "EUR",
    name: "Yevro",
    nameEn: "Euro",
    flag: "🇪🇺",
    rate: "13 450.52",
    diff: -8.21,
    nominal: 1,
  },
  {
    code: "RUB",
    name: "Rossiya rubli",
    nameEn: "Russian Ruble",
    flag: "🇷🇺",
    rate: "139.27",
    diff: -0.31,
    nominal: 1,
  },
  {
    code: "GBP",
    name: "Funt sterling",
    nameEn: "British Pound",
    flag: "🇬🇧",
    rate: "15 643.96",
    diff: 22.14,
    nominal: 1,
  },
  {
    code: "TRY",
    name: "Turk lirasi",
    nameEn: "Turkish Lira",
    flag: "🇹🇷",
    rate: "242.22",
    diff: 1.14,
    nominal: 1,
  },
  {
    code: "KZT",
    name: "Qozog‘iston tengesi",
    nameEn: "Kazakhstani Tenge",
    flag: "🇰🇿",
    rate: "26.75",
    diff: -0.08,
    nominal: 1,
  },
  {
    code: "KGS",
    name: "Qirg‘iz somi",
    nameEn: "Kyrgyzstani Som",
    flag: "🇰🇬",
    rate: "135.25",
    diff: 0.42,
    nominal: 1,
  },
  {
    code: "AZN",
    name: "Ozarbayjon manati",
    nameEn: "Azerbaijani Manat",
    flag: "🇦🇿",
    rate: "6 959.34",
    diff: 4.11,
    nominal: 1,
  },
  {
    code: "TMT",
    name: "Turkmaniston manati",
    nameEn: "Turkmenistani Manat",
    flag: "🇹🇲",
    rate: "3 380.25",
    diff: 0,
    nominal: 1,
  },
  {
    code: "CNY",
    name: "Xitoy yuani",
    nameEn: "Chinese Yuan",
    flag: "🇨🇳",
    rate: "1 762.49",
    diff: -2.35,
    nominal: 1,
  },
  {
    code: "JPY",
    name: "Yaponiya iyenasi",
    nameEn: "Japanese Yen",
    flag: "🇯🇵",
    rate: "74.49",
    diff: 0.13,
    nominal: 100,
  },
  {
    code: "CHF",
    name: "Shveytsariya franki",
    nameEn: "Swiss Franc",
    flag: "🇨🇭",
    rate: "14 220.31",
    diff: 16.82,
    nominal: 1,
  },
  {
    code: "AED",
    name: "BAA dirhami",
    nameEn: "UAE Dirham",
    flag: "🇦🇪",
    rate: "3 221.77",
    diff: -0.41,
    nominal: 1,
  },
  {
    code: "SAR",
    name: "Saudiya riyali",
    nameEn: "Saudi Riyal",
    flag: "🇸🇦",
    rate: "3 152.23",
    diff: 0.24,
    nominal: 1,
  },
  {
    code: "GEL",
    name: "Gruziya larisi",
    nameEn: "Georgian Lari",
    flag: "🇬🇪",
    rate: "4 391.20",
    diff: 1.27,
    nominal: 1,
  },
  {
    code: "INR",
    name: "Hindiston rupiyasi",
    nameEn: "Indian Rupee",
    flag: "🇮🇳",
    rate: "140.18",
    diff: -0.19,
    nominal: 1,
  },
  {
    code: "KRW",
    name: "Janubiy Koreya voni",
    nameEn: "South Korean Won",
    flag: "🇰🇷",
    rate: "8.42",
    diff: 0.02,
    nominal: 100,
  },
  {
    code: "CAD",
    name: "Kanada dollari",
    nameEn: "Canadian Dollar",
    flag: "🇨🇦",
    rate: "8 650.40",
    diff: 7.13,
    nominal: 1,
  },
  {
    code: "AUD",
    name: "Avstraliya dollari",
    nameEn: "Australian Dollar",
    flag: "🇦🇺",
    rate: "7 980.12",
    diff: -4.17,
    nominal: 1,
  },
  {
    code: "PLN",
    name: "Polsha zlotiyi",
    nameEn: "Polish Zloty",
    flag: "🇵🇱",
    rate: "3 190.44",
    diff: 2.19,
    nominal: 1,
  },
  {
    code: "SEK",
    name: "Shvetsiya kronasi",
    nameEn: "Swedish Krona",
    flag: "🇸🇪",
    rate: "1 260.33",
    diff: -1.42,
    nominal: 1,
  },
  {
    code: "NOK",
    name: "Norvegiya kronasi",
    nameEn: "Norwegian Krone",
    flag: "🇳🇴",
    rate: "1 180.76",
    diff: 0.83,
    nominal: 1,
  },
  {
    code: "DKK",
    name: "Daniya kronasi",
    nameEn: "Danish Krone",
    flag: "🇩🇰",
    rate: "1 802.91",
    diff: 0.51,
    nominal: 1,
  },
];

const popularCodes = [
  "USD",
  "EUR",
  "RUB",
  "TRY",
  "KZT",
  "KGS",
  "AZN",
  "GBP",
];

const translations = {
  uz: {
    finance: "TURKHUB FINANCE",
    title: "Valyuta kurslari",
    all: "Barcha kurslar",
    close: "Yopish",
    search: "Valyutani qidiring...",
    official: "Frontend demo · API ulanishi keyin qo‘shiladi",
    updated: "Yangilangan",
    today: "Bugun",
    rate: "Kurs",
    change: "O‘zgarish",
    nominal: "Nominal",
    sum: "so‘m",
    noResults: "Valyuta topilmadi",
    positive: "O‘sish",
    negative: "Pasayish",
    stable: "Barqaror",
  },

  tr: {
    finance: "TURKHUB FINANCE",
    title: "Döviz kurları",
    all: "Tüm kurlar",
    close: "Kapat",
    search: "Para birimi ara...",
    official: "Frontend demo · API bağlantısı daha sonra eklenecek",
    updated: "Güncellendi",
    today: "Bugün",
    rate: "Kur",
    change: "Değişim",
    nominal: "Nominal",
    sum: "som",
    noResults: "Para birimi bulunamadı",
    positive: "Yükseliş",
    negative: "Düşüş",
    stable: "Sabit",
  },

  kz: {
    finance: "TURKHUB FINANCE",
    title: "Валюта бағамдары",
    all: "Барлық бағамдар",
    close: "Жабу",
    search: "Валютаны іздеу...",
    official: "Frontend demo · API кейін қосылады",
    updated: "Жаңартылды",
    today: "Бүгін",
    rate: "Бағам",
    change: "Өзгеріс",
    nominal: "Номинал",
    sum: "сум",
    noResults: "Валюта табылмады",
    positive: "Өсу",
    negative: "Төмендеу",
    stable: "Тұрақты",
  },

  en: {
    finance: "TURKHUB FINANCE",
    title: "Exchange rates",
    all: "All rates",
    close: "Close",
    search: "Search currency...",
    official: "Frontend demo · API connection will be added later",
    updated: "Updated",
    today: "Today",
    rate: "Rate",
    change: "Change",
    nominal: "Nominal",
    sum: "UZS",
    noResults: "Currency not found",
    positive: "Up",
    negative: "Down",
    stable: "Stable",
  },
};

export default function CurrencyTicker({
  lang = "uz",
}: CurrencyTickerProps) {
  const t = translations[lang];

  const [modalOpen, setModalOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const filteredCurrencies =
    useMemo(() => {
      if (!search.trim()) {
        return currencies;
      }

      const query =
        search.toLowerCase().trim();

      return currencies.filter(
        (currency) =>
          currency.code
            .toLowerCase()
            .includes(query) ||
          currency.name
            .toLowerCase()
            .includes(query) ||
          currency.nameEn
            .toLowerCase()
            .includes(query),
      );
    }, [search]);

  const popularCurrencies =
    useMemo(() => {
      return popularCodes
        .map((code) =>
          currencies.find(
            (currency) =>
              currency.code === code,
          ),
        )
        .filter(
          (
            item,
          ): item is Currency =>
            Boolean(item),
        );
    }, []);

  function formatDiff(value: number) {
    if (value === 0) {
      return "0.00";
    }

    return `${value > 0 ? "+" : ""}${value.toFixed(2)}`;
  }

  function getTrend(value: number) {
    if (value > 0) {
      return "up";
    }

    if (value < 0) {
      return "down";
    }

    return "stable";
  }

  function getName(currency: Currency) {
    if (lang === "en") {
      return currency.nameEn;
    }

    return currency.name;
  }

  return (
    <>
      {/* =====================================================
          CURRENCY TICKER
      ===================================================== */}

      <section className="th-currency-ticker">
        <div className="th-currency-inner">

          <div className="th-currency-heading">
            <span className="th-currency-live">
              <i />
              LIVE
            </span>

            <strong>
              {t.title}
            </strong>
          </div>

          <div className="th-currency-track">
            {popularCurrencies.map(
              (currency) => {
                const trend =
                  getTrend(
                    currency.diff,
                  );

                return (
                  <div
                    className="th-currency-item"
                    key={currency.code}
                  >
                    <span className="th-currency-flag">
                      {currency.flag}
                    </span>

                    <strong>
                      {currency.code}
                    </strong>

                    <span className="th-currency-value">
                      {currency.rate}
                    </span>

                    {trend ===
                      "up" && (
                      <span className="th-currency-up">
                        ↑
                      </span>
                    )}

                    {trend ===
                      "down" && (
                      <span className="th-currency-down">
                        ↓
                      </span>
                    )}

                    {trend ===
                      "stable" && (
                      <span className="th-currency-neutral">
                        —
                      </span>
                    )}
                  </div>
                );
              },
            )}
          </div>

          <button
            type="button"
            className="th-currency-all"
            onClick={() =>
              setModalOpen(true)
            }
          >
            {t.all}

            <span>→</span>
          </button>
        </div>
      </section>

      {/* =====================================================
          CURRENCY MODAL
      ===================================================== */}

      {modalOpen && (
        <div
          className="th-currency-modal"
          onClick={() =>
            setModalOpen(false)
          }
        >
          <div
            className="th-currency-modal-window"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* HEADER */}

            <div className="th-currency-modal-header">
              <div>
                <span className="th-overline">
                  {t.finance}
                </span>

                <h2>
                  {t.title}
                </h2>

                <p>
                  {t.official}
                </p>
              </div>

              <button
                type="button"
                className="th-currency-modal-close"
                onClick={() =>
                  setModalOpen(false)
                }
                aria-label={t.close}
              >
                ×
              </button>
            </div>

            {/* SEARCH */}

            <div className="th-currency-search">
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
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value,
                  )
                }
                placeholder={
                  t.search
                }
              />

              {search && (
                <button
                  type="button"
                  onClick={() =>
                    setSearch("")
                  }
                >
                  ×
                </button>
              )}
            </div>

            {/* LIST */}

            <div className="th-currency-table-wrap">
              {filteredCurrencies.length >
              0 ? (
                <div className="th-currency-list">
                  {filteredCurrencies.map(
                    (
                      currency,
                      index,
                    ) => {
                      const trend =
                        getTrend(
                          currency.diff,
                        );

                      return (
                        <div
                          className="th-currency-row"
                          key={
                            currency.code
                          }
                        >
                          <div className="th-currency-number">
                            {String(
                              index + 1,
                            ).padStart(
                              2,
                              "0",
                            )}
                          </div>

                          <div className="th-currency-main">
                            <div className="th-currency-big-code">
                              <span>
                                {
                                  currency.flag
                                }
                              </span>

                              <strong>
                                {
                                  currency.code
                                }
                              </strong>
                            </div>

                            <div className="th-currency-name">
                              {getName(
                                currency,
                              )}
                            </div>
                          </div>

                          <div className="th-currency-nominal">
                            <span>
                              {t.nominal}
                            </span>

                            <strong>
                              {
                                currency.nominal
                              }
                            </strong>
                          </div>

                          <div className="th-currency-rate">
                            <span>
                              {t.rate}
                            </span>

                            <strong>
                              {
                                currency.rate
                              }
                            </strong>

                            <small>
                              {t.sum}
                            </small>
                          </div>

                          <div
                            className={`th-currency-change ${trend}`}
                          >
                            {trend ===
                              "up" && (
                              <b>
                                ↑
                              </b>
                            )}

                            {trend ===
                              "down" && (
                              <b>
                                ↓
                              </b>
                            )}

                            {trend ===
                              "stable" && (
                              <b>
                                —
                              </b>
                            )}

                            <span>
                              {formatDiff(
                                currency.diff,
                              )}
                            </span>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              ) : (
                <div className="th-currency-empty">
                  <span>⌕</span>

                  <h3>
                    {t.noResults}
                  </h3>
                </div>
              )}
            </div>

            {/* FOOTER */}

            <div className="th-currency-modal-footer">
              <span>
                {t.updated}:{" "}
                25.09.2026
              </span>

              <span>
                {t.today}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}