
import Link from "next/link";
import { videoNews } from "@/data/news";

export default function VideoNews() {
  return (
    <section className="video-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              VIDEO
            </span>

            <h2>Video yangiliklar</h2>

            <p>
              Muhim voqealarni video formatda
              kuzating.
            </p>
          </div>
        </div>

        <div className="video-grid">
          {videoNews.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="video-card"
            >
              <div className="video-card-image">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="video-card-body">
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
