"use client";

import type React from "react";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { RiCalendar2Line, RiTimeLine, RiScissorsLine } from "react-icons/ri";

const services = [
  "Classic Haircut",
  "Beard Trim",
  "Hot Towel Shave",
  "Hair Coloring",
  "Kids Haircut",
  "Facial Treatment",
];

export default function BookPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log({ date, time, service });
    alert("Booking submitted! We will confirm your appointment soon.");
  };

  return (
    <main>
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-5xl font-oswald text-center mb-12">
            Book Your Appointment
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2" htmlFor="date">
                Date
              </label>
              <div className="relative">
                <RiCalendar2Line className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded py-2 px-4 pl-10"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-2" htmlFor="time">
                Time
              </label>
              <div className="relative">
                <RiTimeLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded py-2 px-4 pl-10"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-2" htmlFor="service">
                Service
              </label>
              <div className="relative">
                <RiScissorsLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded py-2 px-4 pl-10"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-bronze hover:bg-bronze-dark text-white font-bold py-3 px-4 rounded transition-colors duration-200"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
