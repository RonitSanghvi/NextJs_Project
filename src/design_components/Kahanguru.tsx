"use client";
import Image from "next/image";
import SongadhImage from "../assets/Songadh.jpg";
import Kanjiswami from "../assets/Kanjiswami.jpg";

export function AboutKahanGuru() {
  return (
    <section
      id="kahan-guru"
      className="relative flex justify-center items-center overflow-hidden"
    >
      {/* Background Songadh Image with Blur */}
      <Image
        src={SongadhImage}
        alt="Songadh"
        fill
        className="object-cover blur-sm opacity-100"
        priority
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 z-10"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image of Kanji Swami */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#ea5c95]/60">
              <Image
                src={Kanjiswami}
                alt="Param Pujya Kanji Swami"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d1b2e] mb-6">
              About{" "}
              <span className="text-[#ea5c95]">
                Kahan Guru (Pu. Kanji Swami)
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              The temple also carries the spiritual influence of{" "}
              <span className="font-bold">Param Pujya Kanji Swami</span>, a
              great Digambar Jain scholar and preacher of the 20th century.
              Known as <span className="italic">“Kahan Guru”</span> by devotees,
              he transformed the spiritual landscape by bringing forth the
              essence of <span className="font-semibold">Samaysar</span> and
              other Jain scriptures.
            </p>
            <p className="text-lg leading-relaxed">
              His teachings emphasized inner purity, right understanding and the role of the soul in attaining liberation. His followers consider him a beacon of{" "}
              <span className="font-bold text-[#ea5c95]">
                spiritual awakening
              </span>{" "}
              in modern times.
            </p>
            <button className="mt-8 ml-4 px-6 py-3 bg-[#5abab6] text-white rounded-full shadow-lg hover:bg-[#4a9a9a] transition duration-300">Check more about Kahan Guru & Suvarnapuri Songadh</button>
          </div>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-12 right-12 w-24 h-24 bg-[#5abab6] rounded-full opacity-70 blur-xl"></div>
      <div className="absolute bottom-12 left-12 w-16 h-16 bg-[#ea5c95] rounded-full opacity-80 blur-lg"></div>
    </section>
  );
}