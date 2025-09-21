"use client";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";

export function Hero() {

  const paragraphs = [
    "आत्मा का स्वभाव अनन्त ज्ञान, अनन्त दर्शन और अनन्त सुख है। बाहर खोजने से नहीं मिलेगा, भीतर जागने से मिलेगा।",
    "कर्म से बचने का उपाय कर्म बाँधने वाले कषायों का त्याग है। बाहरी त्याग तभी सार्थक है जब भीतर की आसक्ति छूटे।",
    "समयसार आत्मा का दर्पण है। जो आत्मा को देखना चाहता है, वह समयसार का चिंतन करे।",
    "आत्मा का धर्म शुद्धि है। जब तक आत्मा को द्रव्य और पर्याय का भेद नहीं समझता, तब तक जन्म–मरण की श्रृंखला नहीं टूटती।",
    "मोक्ष कहीं दूर नहीं, जब आत्मा अपने स्वरूप में स्थिर हो जाए, तभी यही क्षण मोक्ष का द्वार है।",
    "अहिंसा परमोधर्म। जीव मात्र के प्रति करुणा और दया का भाव ही अहिंसा है।",
    "ज्ञान ही मुक्ति का मार्ग है। अज्ञान ही बंधन का कारण।",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % paragraphs.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [paragraphs.length]);

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#ffe3f3] to-[#f9b0c8]/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d1b2e] mb-6">
              Welcome to<br />
              <span className="text-[#ea5c95] tracking-wide">श्री सीमंधर स्वामी दिगंबर जैन मंदिर</span>
            </h1>

            {/* <p className="text-lg text-[#6b4c57] mb-8 leading-relaxed">
              A sacred place of worship and spiritual enlightenment, dedicated to the teachings 
              of the Jain Tirthankaras. Experience peace, devotion, and the path to liberation 
              in our divine sanctuary.
            </p> */}

              {/* Sliding Paragraph */}
            {/* <div className="h-24 relative overflow-hidden mb-8">
              {paragraphs.map((text, index) => (
                <p
                  key={index}
                  className={`absolute left-0 right-0 text-lg text-[#6b4c57] leading-relaxed transition-opacity duration-700 ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {text}
                </p>
              ))}
            </div> */}

             <div className="h-24 relative overflow-hidden mb-4">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${current * 100}%)`,
                }}
              >
                {paragraphs.map((text, index) => (
                  <p
                    key={index}
                    className="min-w-full text-lg text-[#6b4c57] leading-relaxed px-1 font-bold tracking-wide"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#ea5c95] hover:bg-[#ea5c95]/90 text-white px-8 py-3 rounded-lg transition-colors">
                Visit Temple
              </button>
              <button className="bg-[#5abab6] hover:bg-[#5abab6]/90 text-white px-8 py-3 rounded-lg transition-colors">
                Events
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1747487501299-d95d65c742a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWluJTIwdGVtcGxlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc1NzcyOTI5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Beautiful Jain Temple Architecture"
                className="w-full h-full object-cover"
              /> */}
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#5abab6] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#ea5c95] rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}