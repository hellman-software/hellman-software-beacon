import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { Technologies } from "@/components/Technologies";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content">
        <Hero />
        <Expertise />
        <Technologies />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
