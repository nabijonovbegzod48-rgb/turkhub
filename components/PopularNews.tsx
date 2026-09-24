import Link from "next/link";
import { news } from "@/data/news";

export default function PopularNews() {
  const popular = [...news]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  return (
    <section className="popular-section">
      <div className="site-container">
        <div className="popular-layout">
          <div className="popular-left">
            <div className="content-heading">
              <div>
                <span className="heading-label">
                  TRENDING
                </span>

                <h2>Eng ko‘p o‘qilgan</h2>
              </div>
            </div>

            <div className="popular-list">
              {popular.map((item, index) => (
                <Link
                  href={`/news/${item.slug}`}
                  key={item.id}
                  className="popular-item"
                >
                  <span className="popular-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="popular-image">
                    <img
                      src={item.image}
                      alt={item.title}
                    />
                  </div>

                  <div className="popular-info">
                    <span>{item.category}</span>

                    <h3>{item.title}</h3>

                    <small>
                      {item.views.toLocaleString()} marta o‘qilgan
                    </small>
                  </div>

                  <span className="popular-arrow">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="popular-highlight">
            <div className="highlight-pattern" />

            <div className="highlight-content">
              <span className="highlight-small">
                TURKHUB DAILY
              </span>

              <h3>
                Markaziy Osiyo va turkiy dunyo
                yangiliklari bir joyda.
              </h3>

              <p>
                Muhim voqealar, tahlillar va
                eksklyuziv materiallarni kuzatib
                boring.
              </p>

              <a href="#newsletter">
                Yangiliklarga obuna bo‘lish
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}