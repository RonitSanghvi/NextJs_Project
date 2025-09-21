import { Header } from "../design_components/Header";
import { Hero } from "../design_components/Hero";
import { About } from "../design_components/About";
import { Footer } from "../design_components/Footer";
import { AboutKahanGuru } from "@/design_components/Kahanguru";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffe3f3]">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <AboutKahanGuru />
      </main>
      <Footer />
    </div>
  );
}
