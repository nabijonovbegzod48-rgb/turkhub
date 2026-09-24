
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link
              href="/"
              className="th-logo"
            >
              <span className="th-logo-word">
                TURK
              </span>

              <span className="th-logo-accent">
                HUB
              </span>

              <span className="th-logo-dot" />
            </Link>

            <p>
              Markaziy Osiyo va turkiy dunyo
              yangiliklarini bir joyda
              kuzating.
            </p>
          </div>

          <div className="footer-column">
            <h4>Bo‘limlar</h4>

            <Link href="/category/iqtisodiyot">
              Iqtisodiyot
            </Link>

            <Link href="/category/madaniyat">
              Madaniyat
            </Link>

            <Link href="/category/sayohat">
              Sayohat
            </Link>

            <Link href="/category/dunyo">
              Dunyo
            </Link>
          </div>

          <div className="footer-column">
            <h4>TurkHub</h4>

            <Link href="/">
              Bosh sahifa
            </Link>

            <Link href="/live">
              Jonli efir
            </Link>

            <Link href="/search">
              Qidiruv
            </Link>
          </div>

          <div className="footer-column">
            <h4>Aloqa</h4>

            <a href="#">
              Telegram
            </a>

            <a href="#">
              Instagram
            </a>

            <a href="#">
              YouTube
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 TurkHub
          </span>

          <span>
            Markaziy Osiyo va turkiy dunyo
          </span>
        </div>
      </div>
    </footer>
  );
}
