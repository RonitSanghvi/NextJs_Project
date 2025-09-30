"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "../../design_components/Header";
import { Footer } from "../../design_components/Footer";
import Mahavir from "../../assets/Pratima/Mahavir.jpg";
import Bahubali from "../../assets/Pratima/Bahubali.jpg";
import Simandhar from "../../assets/Pratima/Simandhar.jpg";

type IdolType = "huge" | "small" | "standing";

import type { StaticImageData } from "next/image";

type Idol = {
  id: number;
  name: string;
  date: string;
  description: string;
  image: string | StaticImageData;
  symbol: string;
  type: IdolType;
};

const idols: Idol[] = [
  {
    id: 1,
    name: "Simandhar Swami (Mulnayak)",
    date: "Pratishtha: November 24, 1989",
    description:
      "Shree Simandhar Swami is a living Tirthankar who resides in Mahavideh Kshetra. Unlike in our world, where no new Tirthankars are born in this time cycle, Mahavideh Kshetra always has Tirthankars guiding seekers. Simandhar Swami continues to preach the path of liberation, reminding us that the presence of enlightened beings is eternal in the universe.",
    image: Simandhar,
    symbol: "Bull",
    type: "huge",
  },
  {
    id: 2,
    name: "Rishabhdev Bhagwan",
    date: "Pratishtha: 1990",
    description: "Shree Adinath Bhagwan is the first Tirthankar of the present cycle. Before his time, people lived simple lives without structured society. He introduced agriculture, arts, and law, laying the foundation of civilization. Later, he renounced everything and attained liberation.",
    image: Mahavir,
    symbol: "Bull",
    type: "small",
  },
  {
    id: 3,
    name: "Chandraprabh Bhagwan",
    date: "Pratishtha: 1991",
    description: "The eighth Tirthankar, Shree Chandraprabh Swami, was known for his radiant aura, shining like the moon. His calm presence attracted everyone, even kings and rulers. Once, a powerful king was filled with anger, but in Swami’s presence, his rage melted into peace.",
    image: Mahavir,
    symbol: "Moon",
    type: "small",
  },
  {
    id: 4,
    name: "Neminath Bhagwan",
    date: "Pratishtha: 1992",
    description: "Shree Neminath Bhagwan, the twenty-second Tirthankar, was a cousin of Lord Krishna. On his wedding day, he heard the cries of animals that were to be slaughtered for the feast. Deeply moved, he abandoned the ceremony and chose renunciation.",
    image: Mahavir,
    symbol: "Shell",
    type: "small",
  },
  {
    id: 5,
    name: "Parshwanath Bhagwan",
    date: "Pratishtha: 1993",
    description: "The twenty-third Tirthankar, Shree Parshwanath Bhagwan, lived 250 years before Mahavir Swami. He preached the fourfold principles of non-violence, truth, non-stealing, and non-possession. Once, he saved a snake that was being burned by an ascetic, showing deep compassion for all beings.",
    image: Mahavir,
    symbol: "Snake",
    type: "small",
  },
  {
    id: 6,
    name: "Mahavir Bhagwan",
    date: "Pratishtha: 1993",
    description: "The twenty-fourth and last Tirthankar, Shree Mahavir Swami, revived Jain Dharma in its purest form. Born as Prince Vardhaman, he renounced his kingdom at the age of 30 and spent years in deep meditation. He attained omniscience and shared the timeless path of non-violence, truth, and non-attachment.",
    image: Mahavir,
    symbol: "Lion",
    type: "small",
  },
  {
    id: 7,
    name: "Santinath Bhagwan",
    date: "Pratishtha: 2000",
    description: "Shree Shantinath Bhagwan, the sixteenth Tirthankar, was a king before renunciation. Despite his power, he lived with humility. During his reign, peace and prosperity flourished so much that no disputes or wars were recorded. His very name means “Lord of Peace.”",
    image: Bahubali,
    symbol: "Deer",
    type: "standing",
  },
  {
    id: 8,
    name: "Kunthunath Bhagwan",
    date: "Pratishtha: 2005",
    description: "The seventeenth Tirthankar, Shree Kunthunath Bhagwan, was born into royalty. Despite luxuries, he realized that worldly pleasures are temporary. After witnessing suffering around him, he gave up his kingdom and chose the spiritual path.",
    image: Bahubali,
    symbol: "Goat",
    type: "standing",
  },
  {
    id: 9,
    name: "Arhanath Bhagwan",
    date: "Pratishtha: 2010",
    description: "Shree Arnath Bhagwan, the eighteenth Tirthankar, was deeply devoted to spiritual pursuits even as a young prince. When he saw the endless cycle of birth and death, he chose renunciation over a throne.",
    image: Bahubali,
    symbol: "Fish",
    type: "standing",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 12, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1 },
};

function IdolCard({ idol }: { idol: Idol }) {
  const aspectClass = idol.type === "small" ? "aspect-square" : "aspect-[3/4]";

  return (
    <motion.article
      variants={cardVariant}
      initial = {{x:100, opacity:0}}
      animate = {{x:0, opacity:1, transition: {duration:1.5,  delay: idol.id * 0.3}}}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 18, duration:0.5 }}
      className="group relative overflow-hidden w-[320px] h-full flex flex-col rounded-2xl p-4 bg-white/40 backdrop-blur-md border border-[#EA5C95]/30 shadow-xl"
    >
      {/* Image */}
      <div className={`${aspectClass}  rounded-xl overflow-hidden relative mb-4`}>
        <Image
          src={idol.image}
          alt={idol.name}
          fill
          sizes="(max-width: 1024px) 45vw, 360px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="space-y-2 flex flex-col">
        <h3 className="text-md md:text-xl font-extrabold tracking-tight text-[#EA5C95]">
          {idol.name}
        </h3>
        <p className="text-sm text-[#5ABAB6] font-semibold">Symbol: {idol.symbol}</p>
        {/* <p className="text-sm text-gray-800 leading-relaxed text-justify flex-1">{idol.description}</p> */}
      </div>
    </motion.article>


  );
}

export default function Page() {
  const main = idols[0];
  const smalls = idols.filter((i) => i.type === "small");
  const standings = idols.filter((i) => i.type === "standing");

  return (
    <main className="min-w-screen bg-[#FED9EB] overflow-hidden">
      <Header />

      <motion.div 
        className="absolute bottom-40 left-64 w-36 h-36 blur-xl bg-[#ea5c95] rounded-full opacity-50" 
        style={{ top: "70%", left: "12%" }}
        animate={{
          x: [0, -165, +365, -55, 0],  
          y: [0, -400, -450, -700, 0],
        }}
        transition={{
          duration: 20,          
          repeat: Infinity,      
          repeatType: "loop",
          ease: "easeInOut",
        }}  
      />

      <motion.div
        className="absolute w-36 h-36 blur-xl bg-[#5ABAB6] rounded-full opacity-50"
        style={{ top: "12%", left: "70%" }}
        animate={{
          x: [0, -165, -365, 0, 0],  
          y: [0, 400, 450, 700, 0],
        }}
        transition={{
          duration: 20,         
          repeat: Infinity,     
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />


      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl text-center font-bold tracking-wide text-[#EA5C95] pt-24">
            Temple Pratima
          </h1>
          
        </header>

        {/* HERO huge idol */}
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 bg-white/40 backdrop-blur-md border border-[#EA5C95]/20 p-8 md:p-12 rounded-3xl">
            <div className="flex flex-col md:flex-row items-center gap-8">


              <div className="mx-auto w-full max-w-[720px] aspect-square rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#EA5C95]/20">
                <Image
                  src={main.image}
                  alt={main.name}
                  sizes="(max-width: 768px) 90vw, 720px"
                  className="object-cover w-full h-full border-2 border-[#EA5C95] rounded-2xl" 
                />
              </div>

              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#EA5C95]">
                  {main.name}
                </h2>
                <p className="mt-2 text-2xl text-[#5ABAB6] font-semibold">Symbol: {main.symbol}</p>
                <p className="mt-4 text-gray-800 leading-relaxed text-justify tracking-wide">
                  {main.description}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CAROUSEL for small idols */}
        <section className="mb-20">
          <div className="border-b-2 border-[#EA5C95] my-4 md:mb-8"/>
          <h2 className="text-2xl md:text-4xl text-center font-bold text-[#EA5C95]">Padmasan Pratimas</h2>
          <div className="border-b-2 border-[#EA5C95] my-4 md:my-8"/>

          <div 
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 "
            
          >
            {smalls.map((i) => (
              <div key={i.id} className="snap-center">
                <IdolCard idol={i} />
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE for standing idols */}
        <section className="relative">
          <div className="border-b-2 border-[#EA5C95] my-4 md:mb-8"/>
          <h2 className="text-2xl md:text-4xl text-center font-bold text-[#EA5C95]">Khadgasan Pratimas</h2>
          <div className="border-b-2 border-[#EA5C95] my-4 md:mb-8"/>

          {standings.map((idol, idx) => (
            <motion.div
              key={idol.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center justify-between mb-12`}
            >
              <div className="rounded-xl overflow-hidden mx-10 shadow-2xl">
                <Image
                  src={idol.image}
                  alt={idol.name}
                  width={500}
                  height={700}
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="px-4 md:px-16 py-10">
                <h3 className="text-2xl md:text-5xl font-bold text-[#EA5C95]">{idol.name}</h3>
                <p className="mt-2 text-lg md:text-2xl text-[#5ABAB6] font-semibold">Symbol: {idol.symbol}</p>
                <p className="mt-4 text-gray-800 leading-relaxed">{idol.description}</p>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
      <Footer />
    </main>
  );
}


