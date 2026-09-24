import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/lib/types";

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className="news-card"
    >
      <div className="news-card-image">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 700px) 100vw, 33vw"
        />
      </div>

      <div className="news-card-content">

        <div className="news-card-meta">
          <span>{item.category}</span>
          <span>{item.time}</span>
        </div>

        <h3>{item.title}</h3>

        <p>{item.description}</p>

        <div className="news-card-footer">
          <span>{item.country}</span>

          <span>
            {item.views.toLocaleString()} ko‘rish
          </span>
        </div>

      </div>
    </Link>
  );
}