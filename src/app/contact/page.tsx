"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import {Header} from "../../design_components/Header";
import { Footer } from "../../design_components/Footer";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>

    <Header />
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 md:px-16 bg-[#ffe3f3]">
      {/* Left Side */}
      <motion.div
        className="w-full md:w-1/2 text-[#2d1b2e] space-y-6"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="uppercase text-sm font-semibold text-[#ea5c95]">
          Contact Section
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold">Get in touch</h1>
        <p className="text-lg text-[#2d1b2e]/80">
          We&apos;d love to hear from you! Whether you have a question, need
          assistance, or just want to say hello—our team is ready to help.
        </p>

        <div className="space-y-4">
          <p className="flex items-center space-x-3">
            <FiPhone className="text-[#5abab6] text-xl" />
            <span>406-555-0120</span>
          </p>
          <p className="flex items-center space-x-3">
            <FiMail className="text-[#5abab6] text-xl" />
            <span>hello@example.com</span>
          </p>
          <p className="flex items-center space-x-3">
            <FiMapPin className="text-[#5abab6] text-xl" />
            <span>192 Griffin Street, Gilbert, AZ 32521</span>
          </p>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-full md:w-1/2 mt-10 md:mt-0 bg-white rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#2d1b2e] mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-[#f9b0c8] focus:outline-none focus:ring-2 focus:ring-[#ea5c95]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#2d1b2e] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-[#f9b0c8] focus:outline-none focus:ring-2 focus:ring-[#ea5c95]"
            />
          </div>

           <div>
            <label className="block text-sm font-semibold text-[#2d1b2e] mb-2">
              Contact Number
            </label>
            <input
              type="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your Contact Number"
              className="w-full px-4 py-3 rounded-lg border border-[#f9b0c8] focus:outline-none focus:ring-2 focus:ring-[#ea5c95]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#2d1b2e] mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-[#f9b0c8] focus:outline-none focus:ring-2 focus:ring-[#ea5c95]"
            />
          </div>


          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#ea5c95] hover:bg-[#5abab6] text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Send message
          </motion.button>
        </form>
      </motion.div>
    </section>
      <Footer />
    </div>
  );
}
