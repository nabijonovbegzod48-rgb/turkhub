import type {
  Category,
  NewsItem,
  Country,
} from "@/lib/types";

/* =========================================================
   CATEGORIES
========================================================= */

export const categories: Category[] = [
  {
    id: 1,
    name: "Siyosat",
    slug: "siyosat",
    icon: "◈",
  },
  {
    id: 2,
    name: "Iqtisodiyot",
    slug: "iqtisodiyot",
    icon: "◌",
  },
  {
    id: 3,
    name: "Jamiyat",
    slug: "jamiyat",
    icon: "○",
  },
  {
    id: 4,
    name: "Texnologiya",
    slug: "texnologiya",
    icon: "⌁",
  },
  {
    id: 5,
    name: "Sport",
    slug: "sport",
    icon: "△",
  },
  {
    id: 6,
    name: "Madaniyat",
    slug: "madaniyat",
    icon: "◇",
  },
  {
    id: 7,
    name: "Dunyo",
    slug: "dunyo",
    icon: "◎",
  },
  {
    id: 8,
    name: "Turizm",
    slug: "turizm",
    icon: "⌂",
  },
  {
    id: 9,
    name: "Ta'lim",
    slug: "talim",
    icon: "□",
  },
];

/* =========================================================
   COUNTRIES
========================================================= */

export const countries: Country[] = [
  {
    id: 1,
    name: "O‘zbekiston",
    slug: "uzbekiston",
    flag: "🇺🇿",
  },
  {
    id: 2,
    name: "Qozog‘iston",
    slug: "qozogiston",
    flag: "🇰🇿",
  },
  {
    id: 3,
    name: "Qirg‘iziston",
    slug: "qirgiziston",
    flag: "🇰🇬",
  },
  {
    id: 4,
    name: "Turkiya",
    slug: "turkiya",
    flag: "🇹🇷",
  },
  {
    id: 5,
    name: "Ozarbayjon",
    slug: "ozarbayjon",
    flag: "🇦🇿",
  },
  {
    id: 6,
    name: "Turkmaniston",
    slug: "turkmaniston",
    flag: "🇹🇲",
  },
];

/* =========================================================
   NEWS
========================================================= */

export const news: NewsItem[] = [
  {
    id: 1,
    slug: "markaziy-osiyoda-yangi-iqtisodiy-imkoniyatlar",
    title:
      "Markaziy Osiyoda yangi iqtisodiy imkoniyatlar va hamkorlik yo‘nalishlari muhokama qilindi",
    description:
      "Mintaqa davlatlari o‘rtasidagi savdo, investitsiya va transport aloqalarini rivojlantirish bo‘yicha yangi tashabbuslar ilgari surildi.",
    category: "Iqtisodiyot",
    country: "O‘zbekiston",
    image: "/images/news-1.jpg",
    date: "22 sentyabr, 2026",
    time: "10:32",
    views: 12450,
    author: "TurkHub News",
    featured: true,
    video: true,
  },

  {
    id: 2,
    slug: "ozbekistonda-raqamli-xizmatlar-rivojlanmoqda",
    title:
      "O‘zbekistonda raqamli xizmatlar rivoji yangi bosqichga chiqmoqda",
    description:
      "Davlat va xususiy sektorda zamonaviy raqamli texnologiyalardan foydalanish ko‘lami kengaymoqda.",
    category: "Texnologiya",
    country: "O‘zbekiston",
    image: "/images/news-2.jpg",
    date: "22 sentyabr, 2026",
    time: "09:48",
    views: 9230,
    author: "TurkHub News",
    video: true,
  },

  {
    id: 3,
    slug: "turkiya-markaziy-osiyo-bilan-hamkorlikni-kuchaytirmoqda",
    title:
      "Turkiya Markaziy Osiyo davlatlari bilan hamkorlikni kuchaytirmoqda",
    description:
      "Yangi loyihalar savdo, transport, ta’lim va texnologiyalar sohalarini qamrab olmoqda.",
    category: "Siyosat",
    country: "Turkiya",
    image: "/images/news-3.jpg",
    date: "22 sentyabr, 2026",
    time: "09:15",
    views: 8410,
    author: "TurkHub News",
    video: true,
  },

  {
    id: 4,
    slug: "qozogistonda-yangi-texnologik-loyihalar",
    title:
      "Qozog‘istonda yangi texnologik loyihalarni amalga oshirish rejalashtirilmoqda",
    description:
      "Innovatsion kompaniyalar va startaplar uchun yangi imkoniyatlar yaratilmoqda.",
    category: "Texnologiya",
    country: "Qozog‘iston",
    image: "/images/news-1.jpg",
    date: "22 sentyabr, 2026",
    time: "08:42",
    views: 7310,
    author: "TurkHub News",
  },

  {
    id: 5,
    slug: "toshkentda-yangi-shahar-loyihalari",
    title:
      "Toshkentda yangi shahar infratuzilmasi loyihalari taqdim etildi",
    description:
      "Shahar transporti, yashil hududlar va zamonaviy jamoat joylarini rivojlantirish rejalari ma’lum qilindi.",
    category: "Jamiyat",
    country: "O‘zbekiston",
    image: "/images/news-2.jpg",
    date: "21 sentyabr, 2026",
    time: "18:24",
    views: 6920,
    author: "TurkHub News",
  },

  {
    id: 6,
    slug: "turk-dunyosi-yoshlar-forumi",
    title:
      "Turk dunyosi yoshlar forumi doirasida yangi tashabbuslar ilgari surildi",
    description:
      "Forumda yoshlar, ta’lim va innovatsiyalar bo‘yicha yangi hamkorlik loyihalari muhokama qilindi.",
    category: "Ta'lim",
    country: "O‘zbekiston",
    image: "/images/news-3.jpg",
    date: "21 sentyabr, 2026",
    time: "17:52",
    views: 6120,
    author: "TurkHub News",
  },

  {
    id: 7,
    slug: "markaziy-osiyoda-turizm-rivoji",
    title:
      "Markaziy Osiyoda turizmni rivojlantirish uchun yangi yo‘nalishlar ochilmoqda",
    description:
      "Tarixiy shaharlar va tabiiy maskanlarga sayyohlar oqimini oshirishga qaratilgan yangi loyihalar ishlab chiqilmoqda.",
    category: "Turizm",
    country: "Qirg‘iziston",
    image: "/images/news-1.jpg",
    date: "21 sentyabr, 2026",
    time: "16:40",
    views: 5780,
    author: "TurkHub News",
    video: true,
  },

  {
    id: 8,
    slug: "ozarbayjonda-madaniy-tadbir",
    title:
      "Ozarbayjonda turkiy xalqlar madaniyatiga bag‘ishlangan yirik tadbir o‘tkazildi",
    description:
      "Tadbirda turkiy xalqlarning san’ati, tarixi va madaniy merosi namoyish etildi.",
    category: "Madaniyat",
    country: "Ozarbayjon",
    image: "/images/news-2.jpg",
    date: "21 sentyabr, 2026",
    time: "15:25",
    views: 4930,
    author: "TurkHub News",
  },

  {
    id: 9,
    slug: "turkmanistonda-yangi-energetika-loyihalari",
    title:
      "Turkmanistonda energetika sohasidagi yangi loyihalar muhokama qilindi",
    description:
      "Energetika va mintaqaviy hamkorlik masalalari yuzasidan uchrashuvlar o‘tkazildi.",
    category: "Iqtisodiyot",
    country: "Turkmaniston",
    image: "/images/news-3.jpg",
    date: "21 sentyabr, 2026",
    time: "14:30",
    views: 4210,
    author: "TurkHub News",
  },

  {
    id: 10,
    slug: "markaziy-osiyo-sport-yangiliklari",
    title:
      "Markaziy Osiyo sportchilarining xalqaro musobaqalardagi natijalari",
    description:
      "Mintaqa sportchilari xalqaro maydonlarda muhim natijalarga erishmoqda.",
    category: "Sport",
    country: "Qozog‘iston",
    image: "/images/news-1.jpg",
    date: "21 sentyabr, 2026",
    time: "13:12",
    views: 3860,
    author: "TurkHub Sport",
    video: true,
  },

  {
    id: 11,
    slug: "ozbekistonda-talim-yangiliklari",
    title:
      "O‘zbekistonda ta’lim tizimini rivojlantirish bo‘yicha yangi rejalar",
    description:
      "Ta’lim sifati va zamonaviy o‘quv dasturlarini rivojlantirishga qaratilgan yangi tashabbuslar taqdim etildi.",
    category: "Ta'lim",
    country: "O‘zbekiston",
    image: "/images/news-2.jpg",
    date: "20 sentyabr, 2026",
    time: "19:10",
    views: 3520,
    author: "TurkHub News",
  },

  {
    id: 12,
    slug: "turkiyada-yangi-startap-markazi",
    title:
      "Turkiyada yangi texnologik startap markazi faoliyatini boshladi",
    description:
      "Yosh tadbirkorlar va texnologik loyihalar uchun yangi innovatsion markaz ish boshladi.",
    category: "Texnologiya",
    country: "Turkiya",
    image: "/images/news-3.jpg",
    date: "20 sentyabr, 2026",
    time: "17:45",
    views: 3190,
    author: "TurkHub Tech",
    video: true,
  },
];

/* =========================================================
   BREAKING NEWS
========================================================= */

export const breakingNews: NewsItem[] =
  news.slice(0, 6);

/* =========================================================
   FEATURED
========================================================= */

export const featuredNews =
  news.find((item) => item.featured) ?? news[0];

/* =========================================================
   LATEST
========================================================= */

export const latestNews = news
  .filter((item) => !item.featured)
  .slice(0, 8);

/* =========================================================
   POPULAR
========================================================= */

export const popularNews = [...news]
  .sort((a, b) => b.views - a.views)
  .slice(0, 6);

/* =========================================================
   TRENDING
========================================================= */

export const trendingNews = [...news]
  .sort((a, b) => b.views - a.views)
  .slice(0, 5);

/* =========================================================
   VIDEO NEWS
========================================================= */

export const videoNews = news
  .filter((item) => item.video)
  .slice(0, 6);