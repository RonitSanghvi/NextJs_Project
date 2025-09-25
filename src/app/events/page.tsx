"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, CalendarDays, Sparkles } from "lucide-react";
import { Header } from "../../design_components/Header";
import { Footer } from "../../design_components/Footer";

export default function EventsPage() {
  const dailyEvents = [
    { time: "7:00 AM", title: "Jinendra Abhishek and Prakshal" },
    { time: "8:00 AM", title: "Jinendra Puja" },
    { time: "10:00 AM", title: "Pravachan", speaker: "By Punditji Shri Abhishek Jain" },
    { time: "11:00 AM", title: "Kanjiswami Recorded Pravachan" },
    { time: "5:00 PM", title: "Pravachan", speaker: "By Punditji Shri Abhishek Jain" },
  ];

  const yearlyEvents = [
    {
      title: "Daslakshan Paryushan Parv",
      description:
        "A ten-day period of introspection, forgiveness, and spiritual renewal. Devotees focus on self-discipline, reading scriptures and devotional practice.",
    },
    {
      title: "Mahavir Jayanti",
      description:
        "Celebration of Lord Mahavirs birth — processions, prayers, and teachings that remind us of compassion and nonviolence.",
    },
    {
      title: "Shrut Panchami",
      description:
        "Day to honour and study the sacred Jain scriptures. It encourages devotion to knowledge, scholarship, and transmission of teachings.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff0f6] to-[#e6fcf5]">
      <Header />

      <main className="px-6 py-20 md:px-16">
        {/* Page title */}
        <motion.h1
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-[#2d1b2e] mb-12"
        >
          Events
        </motion.h1>

        {/* DAILY EVENTS */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-[#5ABAB6]" />
            <h2 className="text-3xl font-semibold text-[#EA5C95]">Daily Events</h2>
          </div>

          {/* timeline wrapper — the animated line is inside this wrapper so it won't overlap the header */}
          <div className="relative mt-8">
            {/* Vertical line (desktop: centered, mobile: left) */}
            {/* Desktop centered line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2.0, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 rounded-full bg-[#EA5C95] origin-top"
              // className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 rounded-full bg-gradient-to-b from-[#5ABAB6] to-[#EA5C95] origin-top"
              style={{ top: 0, bottom: 0 }}
            />

            {/* Mobile left line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2.0, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="md:hidden absolute left-6 w-1 rounded-full bg-[#EA5C95] origin-top"
              // className="md:hidden absolute left-6 w-1 rounded-full bg-gradient-to-b from-[#5ABAB6] to-[#EA5C95] origin-top"
              style={{ top: 0, bottom: 0 }}
            />

            {/* Events list */}
            <div className="space-y-4">
              {dailyEvents.map((ev, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.25 }}
                    className={`relative flex items-start md:items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot: position adjusts for mobile (left-3.5) vs desktop (center) */}
                    <motion.div
                      whileHover={{ scale: 1.25, boxShadow: "0 6px 20px rgba(170,70,130,0.12)" }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.45, delay: 0.05 + idx * 0.08 }}
                      className="absolute left-3.5 md:left-1/2 md:-translate-x-1/2 top-3 w-6 h-6 rounded-full bg-[#5ABAB6] border-4 border-white shadow-lg"
                    />

                    {/* Card */}
                    <div
                      className={`ml-14 md:ml-0 md:w-5/12 bg-white/95 backdrop-blur-sm border border-[#EA5C95]/10 rounded-2xl p-6 shadow-lg ${
                        isEven ? "md:mr-auto md:text-left" : "md:ml-auto md:text-left"
                      }`}
                    >
                      <div className="flex items-center justify-between md:block">
                        <div className="flex items-center gap-3">
                          <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-[#5ABAB6] text-white">
                            {ev.time}
                          </span>
                          <h3 className="text-lg font-bold text-[#2d1b2e]">{ev.title}</h3>
                          {ev.speaker && (
                          <p className="hidden md:block text-sm text-[#2d1b2e]/70">
                            ( {ev.speaker} )
                          </p>
                        )}
                        </div>
                        
                      </div>

                      {/* show speaker on mobile under title */}
                      {ev.speaker && (
                        <p className="mt-3 text-sm text-[#2d1b2e]/70 md:hidden">{ev.speaker}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* YEARLY EVENTS */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="flex items-center justify-center gap-3 mb-6">
            <CalendarDays className="w-6 h-6 text-[#5ABAB6]" />
            <h2 className="text-3xl font-semibold text-[#EA5C95]">Yearly Functions</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {yearlyEvents.map((ev, idx) => (
              <motion.article
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                viewport={{ once: true, amount: 0.25 }}
                className="relative rounded-2xl p-6 bg-white shadow-xl"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#5ABAB6]  inline-flex">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#2d1b2e] text-center">{ev.title}</h3>
                <p className="mt-3 text-sm text-[#2d1b2e]/70 text-center leading-relaxed">
                  {ev.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}