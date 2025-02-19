"use client";

import type React from "react";

import { useState } from "react";
import { RiCalendar2Line, RiTimeLine, RiScissorsLine } from "react-icons/ri";

const services = [
  "Regular Haircut",
  "Scissors Haircut",
  "Royal Shave",
  "Beard Trim",
  "Facial",
];

export default function BookingSystem() {
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
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-oswald mb-8 text-center">
          Book Your Appointment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                htmlFor="date"
              >
                Date
              </label>
              <div className="relative">
                <RiCalendar2Line className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-gray-700"
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                htmlFor="time"
              >
                Time
              </label>
              <div className="relative">
                <RiTimeLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 pl-10 leading-tight focus:outline-none focus:bg-gray-700"
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                htmlFor="service"
              >
                Service
              </label>
              <div className="relative">
                <RiScissorsLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  className="block appearance-none w-full bg-gray-800 border border-gray-700 text-white py-3 px-4 pl-10 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700"
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-bronze hover:bg-bronze-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
