import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroStats from "../components/HeroStats";
import Showcase from "../components/Showcase";
import StackSection from "../components/StackSection";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <Hero />
      <HeroStats />
      <Showcase />
      <StackSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
