
import Hero from "@/components/Hero";
import MarketSection from "@/components/MarketSection";
import EarnSection from "@/components/EarnSection";
import BlogSection from "@/components/BlogSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Hero />
      <MarketSection />
      <EarnSection />
      <BlogSection />
    </div>
  );
}
