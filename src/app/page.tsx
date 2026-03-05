import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CoreSolutions } from "@/components/sections/CoreSolutions";
import { Stats } from "@/components/sections/Stats";
import { Verticals } from "@/components/sections/Verticals";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between w-full">
        <div className="w-full">
          <Hero />
          <About />
          <CoreSolutions />
          <Stats />
          <Verticals />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
