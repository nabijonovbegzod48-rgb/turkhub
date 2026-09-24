export type LiveStatus =
  | "live"
  | "upcoming"
  | "ended";

export interface LiveItem {
  id: number;
  title: string;
  description: string;
  image: string;
  viewers: number;
  status: LiveStatus;
  time: string;
  category: string;
  duration?: string;
}

export const liveItems: LiveItem[] = [
  {
    id: 1,
    title:
      "TurkHub Live — Markaziy Osiyo yangiliklari",
    description:
      "Markaziy Osiyo va turkiy dunyodagi eng muhim voqealar jonli efirda.",
    image: "/images/news-1.jpg",
    viewers: 1240,
    status: "live",
    time: "Hozir",
    category: "Yangiliklar",
  },

  {
    id: 2,
    title:
      "Turkiy dunyo kun tartibi",
    description:
      "Bugungi eng muhim voqealar va dolzarb mavzular sharhi.",
    image: "/images/news-2.jpg",
    viewers: 0,
    status: "upcoming",
    time: "18:30",
    category: "Turkiy dunyo",
  },

  {
    id: 3,
    title:
      "Haftalik tahlil",
    description:
      "Haftaning eng muhim yangiliklari va tahliliy sharh.",
    image: "/images/news-3.jpg",
    viewers: 0,
    status: "upcoming",
    time: "20:00",
    category: "Tahlil",
  },

  {
    id: 4,
    title:
      "Markaziy Osiyo iqtisodiyoti",
    description:
      "Mintaqa iqtisodiyoti va yangi loyihalar haqida maxsus dastur.",
    image: "/images/news-1.jpg",
    viewers: 0,
    status: "upcoming",
    time: "21:30",
    category: "Iqtisodiyot",
  },

  {
    id: 5,
    title:
      "Bugungi efir — yakuniy sharh",
    description:
      "Kun davomida yuz bergan asosiy voqealar sharhi.",
    image: "/images/news-2.jpg",
    viewers: 680,
    status: "ended",
    time: "17:00",
    category: "Yangiliklar",
    duration: "42:18",
  },
];

export const currentLive =
  liveItems.find(
    (item) => item.status === "live"
  ) ?? null;

export const upcomingLive =
  liveItems.filter(
    (item) => item.status === "upcoming"
  );

export const endedLive =
  liveItems.filter(
    (item) => item.status === "ended"
  );