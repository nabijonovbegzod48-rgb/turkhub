import Link from "next/link";
import { breakingNews } from "@/data/news";

export default function BreakingNews() {
  return (
    <section className="breaking-news">
      <div className="container">
        <div className="breaking-news-inner">
          <span className="breaking-news-label">
            SO‘NGGI
          </span>

          <div className="breaking-news-track">
            {breakingNews.length > 0 ? (
              <Link
                href={`/news/${breakingNews[0].slug}`}
              >
                {breakingNews[0].title}
              </Link>
            ) : (
              <span>
                Eng so‘nggi yangiliklar
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

