    "use client";

    import Link from "next/link";
    import { FormEvent, useState } from "react";

    export default function PartnershipPage() {
    const [sent, setSent] = useState(false);

    function handleSubmit(
        event: FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault();

        setSent(true);
    }

    return (
        <main className="th-page">
        <div className="th-topbar">
            <div className="th-container th-topbar-inner">
            <p>
                Markaziy Osiyo va turkiy dunyo
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

                <Link href="/courses">
                Kurslar
                </Link>

                <Link
                href="/hamkorlik"
                className="active"
                >
                Hamkorlik
                </Link>
            </nav>
            </div>
        </header>

        <div className="th-container">
            <section className="th-partnership-hero">
            <div>
                <span className="th-overline">
                TURKHUB PARTNERS
                </span>

                <h1>
                Birgalikda
                <br />
                katta ishlar qilamiz.
                </h1>

                <p>
                TurkHub bilan media, reklama,
                ta'lim, texnologiya yoki boshqa
                loyihalar bo‘yicha hamkorlik
                qiling.
                </p>
            </div>

            <div className="th-partnership-stats">
                <div>
                <strong>01</strong>
                <span>
                    Media
                    hamkorligi
                </span>
                </div>

                <div>
                <strong>02</strong>
                <span>
                    Reklama
                    imkoniyatlari
                </span>
                </div>

                <div>
                <strong>03</strong>
                <span>
                    Ta'lim
                    loyihalari
                </span>
                </div>

                <div>
                <strong>04</strong>
                <span>
                    Texnologik
                    hamkorlik
                </span>
                </div>
            </div>
            </section>

            <section className="th-partnership-section">
            <div className="th-partnership-info">
                <span className="th-overline">
                CONTACT
                </span>

                <h2>
                Loyihangiz haqida
                gaplashamiz.
                </h2>

                <p>
                Quyidagi formani to‘ldiring.
                Jamoamiz siz bilan bog‘lanadi.
                </p>
            </div>

            <form
                className="th-partnership-form"
                onSubmit={handleSubmit}
            >
                <label>
                Ism va familiya
                <input
                    required
                    name="name"
                    placeholder="Ismingiz"
                />
                </label>

                <label>
                Kompaniya
                <input
                    name="company"
                    placeholder="Kompaniya nomi"
                />
                </label>

                <label>
                Email
                <input
                    required
                    type="email"
                    name="email"
                    placeholder="example@mail.com"
                />
                </label>

                <label>
                Telefon
                <input
                    name="phone"
                    placeholder="+998 90 000 00 00"
                />
                </label>

                <label>
                Hamkorlik turi
                <select name="type">
                    <option>
                    Media hamkorligi
                    </option>
                    <option>
                    Reklama
                    </option>
                    <option>
                    Ta'lim
                    </option>
                    <option>
                    Texnologik hamkorlik
                    </option>
                    <option>
                    Boshqa
                    </option>
                </select>
                </label>

                <label>
                Xabar
                <textarea
                    required
                    name="message"
                    rows={6}
                    placeholder="Loyihangiz haqida qisqacha yozing..."
                />
                </label>

                {sent && (
                <div className="th-form-success">
                    ✓ Xabaringiz qabul qilindi.
                </div>
                )}

                <button
                type="submit"
                className="th-primary-button th-submit"
                >
                Hamkorlik so‘rovini yuborish →
                </button>
            </form>
            </section>

            <footer className="th-footer">
            <div className="th-footer-bottom">
                <span>
                © 2026 TurkHub
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