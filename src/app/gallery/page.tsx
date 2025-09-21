"use client";
import React from "react";
import {Header} from "../../design_components/Header";
import CarouselSpacing from "./test2"

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#ffe3f3] text-[#2d1b2e]">
      <Header />
      {/* Intro Section */}
      <section className="relative flex justify-center items-center text-center overflow-hidden min-h-screen">
        <video
          className="object-cover blur-lg absolute w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://www.pexels.com/download/video/17605929/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 h-max bg-white/40 rounded-lg shadow-lg backdrop-blur-md">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-[#ea5c95] mb-6">
            Memories
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[#2d1b2e]">
            Welcome to the Gallery of{" "}
            <span className="font-semibold">
              Shree Simandhar Swami Digambar Jain Mandir
            </span>
            . Here, we preserve and share the moments that define our temple’s journey — 
            from sacred rituals and grand festivals to the vibrant activities of our community.
          </p>
        </div>
      </section>
      
      {/* Events Sections */}
      <div className="space-y-24">
        {/* Panchkalyanak Section */}
        <section className="bg-gradient-to-r from-[#f9b0c8]/40 to-[#ffe3f3]/20 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ea5c95] mb-4">
              🌸 Panchkalyanak Pratishtha Mahotsav (1988)
            </h2>
            <p className="text-lg text-[#2d1b2e]/80 max-w-4xl">
              A historic milestone in our temple’s journey, this five-day
              Panchkalyanak Pratishtha Mahotsav marked the installation of new
              idols on the second floor. Devotees experienced the spiritual
              grandeur of sacred rituals, cultural programs, and divine
              celebrations, creating cherished memories that continue to inspire
              generations.
            </p>
            {/* 👉 Image Gallery will come here later */}
          </div>
        </section>

        {/* <DraggableBox /> */}
        <CarouselSpacing />
        {/* Daslakshan Section */}
        {/* <section className="bg-gradient-to-r from-[#5abab6]/30 to-[#ffe3f3]/20 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d1b2e] mb-4">
              🕉️ Daslakshan Paryushan Parv & Rath Yatra (2025)
            </h2>
            <p className="text-lg text-[#2d1b2e]/80 max-w-4xl">
              The Daslakshan Paryushan Parv, a period of deep reflection and
              austerity, was observed with devotion and discipline. The
              celebrations concluded with a grand Rath Yatra, where the idols of
              the Tirthankaras were carried in a magnificent procession, filling
              the streets with devotion, joy, and chants of spiritual awakening.
            </p>
          </div>
        </section> */}

        {/* Mahavir Jayanti Section */}
        {/* <section className="bg-gradient-to-r from-[#ea5c95]/20 to-[#f9b0c8]/30 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ea5c95] mb-4">
              ✨ Mahavir Jayanti
            </h2>
            <p className="text-lg text-[#2d1b2e]/80 max-w-4xl">
              Every year, the temple celebrates Mahavir Jayanti with great
              reverence and enthusiasm. The life and teachings of Lord Mahavir
              are remembered through pravachans, cultural events, and community
              gatherings. The day becomes a reminder of the eternal message of
              ahimsa, truth, and self-restraint.
            </p>
          </div>
        </section> */}

        {/* Kids Pathshala Section */}
        {/* <section className="bg-gradient-to-r from-[#ffe3f3]/40 to-[#5abab6]/20 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d1b2e] mb-4">
              🌱 Kids Pathshala Projects
            </h2>
            <p className="text-lg text-[#2d1b2e]/80 max-w-4xl">
              Our Kids Pathshala nurtures the younger generation with Jain
              values, stories, and teachings. From creative projects and plays
              to cultural activities, children actively participate and present
              their learnings with devotion and joy. The gallery showcases their
              efforts, innocence, and the bright future of Jain tradition.
            </p>
          </div>
        </section> */}
      </div>
    </div>
  );
}
