import Link from "next/link";
import {
  currentLive,
  upcomingLive,
  endedLive,
} from "@/data/live";

export default function LivePage() {
  return (
    <main className="live-page">

      {/* HERO */}

      <section className="live-page-hero">

        <div className="container">

          <div className="live-page-top">

            <div>

              <span className="section-kicker">
                TURKHUB LIVE
              </span>

              <h1>
                Jonli efir
              </h1>

              <p>
                TurkHub orqali Markaziy Osiyo
                va turkiy dunyodagi muhim
                voqealarni jonli kuzating.
              </p>

            </div>

            <Link
              href="/"
              className="back-home-button"
            >
              ← Bosh sahifa
            </Link>

          </div>


          {currentLive && (

            <div className="live-player-card">

              <div className="live-player">

                <img
                  src={currentLive.image}
                  alt={currentLive.title}
                />

                <div className="live-player-overlay" />


                <div className="live-player-badge">

                  <span className="live-dot" />

                  LIVE

                </div>


                <button
                  type="button"
                  className="live-player-button"
                  aria-label="Efirni boshlash"
                >

                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 5.5L18 12L8 18.5V5.5Z"
                      fill="currentColor"
                    />
                  </svg>

                </button>


                <div className="live-player-bottom">

                  <span>
                    ● {currentLive.viewers.toLocaleString()}
                    {" "}tomoshabin
                  </span>

                  <span>
                    {currentLive.category}
                  </span>

                </div>

              </div>


              <div className="live-player-info">

                <span className="live-category">
                  {currentLive.category}
                </span>

                <h2>
                  {currentLive.title}
                </h2>

                <p>
                  {currentLive.description}
                </p>

              </div>

            </div>

          )}

        </div>

      </section>


      {/* UPCOMING */}

      <section className="live-schedule">

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="section-kicker">
                PROGRAMMA
              </span>

              <h2>
                Keyingi efirlar
              </h2>

            </div>

          </div>


          <div className="live-schedule-grid">

            {upcomingLive.map((item) => (

              <div
                className="schedule-card"
                key={item.id}
              >

                <div className="schedule-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <span>
                    {item.time}
                  </span>

                </div>


                <div className="schedule-content">

                  <small>
                    {item.category}
                  </small>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* REPLAY */}

      <section className="live-replay">

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="section-kicker">
                REPLAY
              </span>

              <h2>
                O‘tgan efirlar
              </h2>

            </div>

          </div>


          <div className="replay-grid">

            {endedLive.map((item) => (

              <Link
                href="/live"
                className="replay-card"
                key={item.id}
              >

                <div className="replay-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="replay-play">

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8 5.5L18 12L8 18.5V5.5Z"
                        fill="currentColor"
                      />
                    </svg>

                  </div>

                </div>


                <div className="replay-content">

                  <small>
                    {item.category}
                  </small>

                  <h3>
                    {item.title}
                  </h3>

                  <div>

                    <span>
                      {item.duration}
                    </span>

                    <span>
                      {item.viewers.toLocaleString()}
                      {" "}ko‘rish
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}