"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "BLAXCUT BARBERSHOP",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen noise-bg overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/images/download (7).jpeg"}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
      </div>

      {/* Marquee Text */}
      <div className="absolute w-full overflow-hidden top-1/4">
        <div className="flex space-x-8 animate-marquee min-w-max">
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              className="inline-block text-[20vw] font-oswald font-bold tracking-wider outline-text opacity-20"
            >
              {slides[currentSlide].subtitle}&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <div className="relative w-64 h-64 md:w-screen md:h-screen mx-auto">
            <Image
              src="/images/Make Your Own Style.png"
              alt="Featured barber"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20"
      ></button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20"
      ></button>
    </div>
  );
}
