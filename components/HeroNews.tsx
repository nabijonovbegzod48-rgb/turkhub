
import Link from "next/link";
import {
  featuredNews,
  latestNews,
} from "@/data/news";

export default function HeroNews() {
  const sideNews = latestNews.slice(0, 2);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <Link
            href={`/news/${featuredNews.slug}`}
            className="hero-featured"
          >
            <img
              src={featuredNews.image}
              alt={featuredNews.title}
            />

            <div className="hero-featured-content">
              <span className="section-kicker">
                {featuredNews.category}
              </span>

              <h1>{featuredNews.title}</h1>

              <p>
                {featuredNews.description}
              </p>
            </div>
          </Link>

          <div className="hero-side">
            {sideNews.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="hero-side-card"
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="hero-side-content">
                  <span className="section-kicker">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

