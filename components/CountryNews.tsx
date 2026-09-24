import Link from "next/link";
import { news } from "@/data/news";

const countries = [
  {
    name: "O‘zbekiston",
    country: "O‘zbekiston",
  },
  {
    name: "Qozog‘iston",
    country: "Qozog‘iston",
  },
  {
    name: "Turkiya",
    country: "Turkiya",
  },
];

export default function CountryNews() {
  return (
    <section className="country-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              MINTAQALAR
            </span>

            <h2>Mamlakatlar</h2>

            <p>
              Turkiy davlatlardan muhim
              yangiliklar.
            </p>
          </div>
        </div>

        <div className="country-grid">
          {countries.map((country) => {
            const item = news.find(
              (newsItem) =>
                newsItem.country ===
                country.country
            );

            if (!item) return null;

            return (
              <Link
                key={country.country}
                href={`/news/${item.slug}`}
                className="country-card"
              >
                <div className="country-card-image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="country-card-body">
                  <div className="card-meta">
                    <span>
                      {country.name}
                    </span>

                    <span>→</span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
