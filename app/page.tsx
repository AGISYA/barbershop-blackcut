import Blog from "@/components/blog";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HoursLocation from "@/components/hours-location";
import Navbar from "@/components/navbar";
import Products from "@/components/product";
import ServiceMerque from "@/components/service-merque";
import Services from "@/components/services";
import TrendingStyles from "@/components/trending-style";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrendingStyles />
      <Services />
      <HoursLocation />
      <Products />
      <Blog />
      <ServiceMerque />
      <Footer />
    </main>
  );
}
