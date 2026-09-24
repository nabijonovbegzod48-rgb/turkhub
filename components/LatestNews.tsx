import Link from "next/link";
import { latestNews } from "@/data/news";

export default function LatestNews() {
  return (
    <section className="latest-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              YANGI
            </span>

            <h2>So‘nggi yangiliklar</h2>

            <p>
              TurkHub tahririyatidan eng yangi
              xabarlar.
            </p>
          </div>
        </div>

        <div className="latest-grid">
          {latestNews.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="news-card"
            >
              <div className="news-card-image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="news-card-body">
                <div className="card-meta">
                  <span>
                    {item.category}
                  </span>

                  <span>{item.time}</span>
                </div>

                <h3>{item.title}</h3>

                <p>
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
