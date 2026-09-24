
import Link from "next/link";
import { trendingNews } from "@/data/news";

export default function TrendingNews() {
  return (
    <section className="trending-section">
      <div className="container">
        <div className="trending-heading">
          <div>
            <span className="section-kicker">
              TURKHUB TANLOVI
            </span>

            <h2>Muhim yangiliklar</h2>

            <p>
              Hozir eng ko‘p e’tibor
              qaratilayotgan yangiliklar
            </p>
          </div>

          <Link
            href="/"
            className="trending-more"
          >
            Barchasini ko‘rish
            <span>→</span>
          </Link>
        </div>

        <div className="trending-panel">
          <div className="trending-panel-top">
            <span>BUGUN</span>

            <span className="trending-live-dot">
              <i />
              Trendda
            </span>
          </div>

          <div className="trending-list">
            {trendingNews.map(
              (item, index) => (
                <Link
                  href={`/news/${item.slug}`}
                  key={item.id}
                  className="trending-item"
                >
                  <div className="trending-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <div className="trending-image">
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  </div>

                  <div className="trending-content">
                    <div className="trending-meta">
                      <span>
                        {item.category}
                      </span>

                      <span>
                        {item.time}
                      </span>
                    </div>

                    <h3>{item.title}</h3>

                    <p>
                      {item.description}
                    </p>

                    <div className="trending-bottom">
                      <span>
                        {item.views.toLocaleString()}{" "}
                        ko‘rish
                      </span>

                      <span className="trending-arrow">
                        ↗
                      </span>
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
