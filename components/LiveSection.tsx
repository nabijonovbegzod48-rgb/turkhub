
import Link from "next/link";
import { liveItems } from "@/data/live";

export default function LiveSection() {
  return (
    <section className="live-section">
      <div className="container">
        <div className="live-panel">
          <div className="live-panel-header">
            <div>
              <span className="section-kicker">
                TURKHUB LIVE
              </span>

              <h2>Jonli efirlar</h2>
            </div>

            <span className="live-badge">
              LIVE
            </span>
          </div>

          <div className="live-grid">
            {liveItems
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.id}
                  href="/live"
                  className="live-card"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="live-card-content">
                    <span className="section-kicker">
                      {item.status ===
                      "live"
                        ? "Jonli"
                        : item.time}
                    </span>

                    <h3>{item.title}</h3>

                    <p>
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
