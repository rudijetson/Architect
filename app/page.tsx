import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Strategy from "@/components/Strategy/Strategy";
import Stats from "@/components/Stats/Stats";
import Engagement from "@/components/Engagement/Engagement";
import Mission from "@/components/Mission/Mission";
import Clients from "@/components/Clients/Clients";
import Gallery from "@/components/Gallery/Gallery";
import Connect from "@/components/Connect/Connect";
import ActionCall from "@/components/ActionCall/ActionCall";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-start">
        <Hero />
        <About />
        <Strategy />
        <Engagement />
        <Stats />
        <Mission />
        <Clients />
        <Gallery />
        <Connect />
        <ActionCall />
      </main>
      <Footer />
    </>
  );
}