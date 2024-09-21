import React from 'react';
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Strategy from "@/components/Strategy/Strategy";
import Stats from "@/components/Stats/Stats";
import Engagement from "@/components/Engagement/Engagement";
import Mission from "@/components/Mission/Mission";
import Clients from "@/components/Clients/Clients";
import Connect from "@/components/Connect/Connect";
import ActionCall from "@/components/ActionCall/ActionCall";
import Footer from "@/components/Footer/Footer";
import QuizPopup from "@/components/Quiz/QuizPopup";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <section className="w-full py-12 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-cyan-600 mb-6">Test Your Grant Readiness</h2>
            <p className="text-gray-700 mb-8">
              Are you prepared to apply for grants? Take our quick quiz to assess your readiness and get personalized tips.
            </p>
            <QuizPopup />
          </div>
        </section>
        <About />
        <Strategy />
        <Engagement />
        <Stats />
        <Mission />
        <Clients />
        <Connect />
        <ActionCall />
      </main>
      <Footer />
    </>
  );
}