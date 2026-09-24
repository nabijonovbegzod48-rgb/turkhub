import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/data/news";

interface NewsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsPage({
  params,
}: NewsPageProps) {
  const { slug } = await params;

  const item = news.find((newsItem) => newsItem.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <header className="article-header">
        <div className="container">
          <Link href="/" className="article-back">
            ← TurkHub
          </Link>
        </div>
      </header>

      <main className="article-page">
        <div className="container article-container">
          <div className="article-category">
            {item.country}
          </div>

          <h1>{item.title}</h1>

          <div className="article-meta">
            <span>{item.date}</span>
            <span>•</span>
            <span>{item.time}</span>
            <span>•</span>
            <span>{item.views.toLocaleString()} ko‘rish</span>
          </div>

          <img
            src={item.image}
            alt={item.title}
            className="article-image"
          />

          <div className="article-content">
            <p className="article-lead">
              {item.description}
            </p>

            <p>
              TurkHub — Markaziy Osiyo va turkiy dunyo
              yangiliklarini zamonaviy formatda
              yetkazishga qaratilgan media platforma.
            </p>

            <p>
              Ushbu material demo frontend ma'lumotlari
              asosida tayyorlangan. Platformaning keyingi
              bosqichida yangiliklar backend va admin
              panel orqali boshqariladi.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}