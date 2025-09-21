"use client";

import { motion } from "framer-motion";
import { Header } from "../../design_components/Header";
import { Footer } from "../../design_components/Footer";

export default function EventsPage() {
  const dailyEvents = [
    { time: "7:00 AM", title: "Jinendra Abhishek and Prakshal" },
    { time: "8:00 AM", title: "Jinendra Puja" },
    { time: "10:00 AM", title: "Pravachan", speaker: "By Pundit Abhishek Jain" },
    { time: "11:00 AM", title: "Kanjiswami Recorded Pravachan" },
    { time: "5:00 PM", title: "Pravachan" },
  ];

  const yearlyEvents = [
    "Daslakshan Paryushan Parv",
    "Mahavir Jayanti",
    "Shrut Panchami",
  ];

  return (
    <div>
    <Header />
    <section className="min-h-screen bg-[#ffe3f3] px-6 py-20 md:px-16">
      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-[#2d1b2e] mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Events
      </motion.h1>

      {/* Daily Events */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[#ea5c95] mb-6">
          Daily Events
        </h2>
        <div className="space-y-6">
          {dailyEvents.map((event, idx) => (
            <motion.div
              key={idx}
              className="flex items-start space-x-4 bg-white p-5 rounded-lg shadow-md border-l-4 border-[#5abab6]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
            >
              <div className="text-sm font-semibold text-[#2d1b2e] w-20">
                {event.time}
              </div>
              <div>
                <p className="text-lg font-medium text-[#2d1b2e]">
                  {event.title}
                </p>
                {event.speaker && (
                  <p className="text-sm text-[#2d1b2e]/70">{event.speaker}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Yearly Events */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[#ea5c95] mb-6">
          Yearly Functions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {yearlyEvents.map((event, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-[#ea5c95]"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
            >
              <p className="text-lg font-medium text-[#2d1b2e]">{event}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
      <Footer />
    </div>
  );
}
