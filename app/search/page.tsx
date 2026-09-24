import Link from "next/link";
import { news } from "@/data/news";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;

  const query = (params.q || "").trim();

  const normalizedQuery = query.toLowerCase();

  const results = normalizedQuery
    ? news.filter((item) => {
        return (
          item.title.toLowerCase().includes(normalizedQuery) ||
          item.description.toLowerCase().includes(normalizedQuery) ||
          item.category.toLowerCase().includes(normalizedQuery) ||
          item.country.toLowerCase().includes(normalizedQuery) ||
          item.author.toLowerCase().includes(normalizedQuery)
        );
      })
    : [];

  return (
    <main className="search-page">
      <div className="container">

        <div className="search-page-header">
          <div>
            <span className="section-kicker">
              TURKHUB QIDIRUV
            </span>

            <h1>
              {query
                ? `"${query}" bo‘yicha natijalar`
                : "Yangiliklarni qidiring"}
            </h1>

            {query && (
              <p>
                {results.length} ta natija topildi
              </p>
            )}
          </div>
        </div>

        {!query && (
          <div className="empty-search">
            <div className="empty-search-icon">
              🔎
            </div>

            <h2>
              Yangilik izlang
            </h2>

            <p>
              Yuqoridagi qidiruv tugmasidan foydalanib,
              kerakli yangilikni toping.
            </p>

            <Link href="/" className="back-home-button">
              Bosh sahifaga qaytish
            </Link>
          </div>
        )}

        {query && results.length === 0 && (
          <div className="empty-search">
            <div className="empty-search-icon">
              😕
            </div>

            <h2>
              Natija topilmadi
            </h2>

            <p>
              "{query}" bo‘yicha hech qanday yangilik topilmadi.
            </p>

            <Link href="/" className="back-home-button">
              Bosh sahifaga qaytish
            </Link>
          </div>
        )}

        {results.length > 0 && (
          <div className="search-results">

            {results.map((item) => (
              <Link
                href={`/news/${item.slug}`}
                className="search-result-card"
                key={item.id}
              >
                <div className="search-result-image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="search-result-content">

                  <div className="search-result-meta">
                    <span>
                      {item.country}
                    </span>

                    <span>
                      {item.date}
                    </span>
                  </div>

                  <h2>
                    {item.title}
                  </h2>

                  <p>
                    {item.description}
                  </p>

                  <div className="search-result-bottom">
                    <span>
                      {item.time}
                    </span>

                    <span>
                      {item.views.toLocaleString()} ko‘rish
                    </span>
                  </div>

                </div>
              </Link>
            ))}

          </div>
        )}

      </div>
    </main>
  );
}