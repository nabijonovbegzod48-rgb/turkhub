
import Header from "@/components/Header";
import BreakingNews from "@/components/BreakingNews";
import CategoryNav from "@/components/CategoryNav";
import HeroNews from "@/components/HeroNews";
import LiveSection from "@/components/LiveSection";
import TrendingNews from "@/components/TrendingNews";
import LatestNews from "@/components/LatestNews";
import VideoNews from "@/components/VideoNews";
import CountryNews from "@/components/CountryNews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="app-shell">
      <Header />

      <main>
        <BreakingNews />
        <CategoryNav />
        <HeroNews />
        <LiveSection />
        <TrendingNews />
        <LatestNews />
        <VideoNews />
        <CountryNews />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

