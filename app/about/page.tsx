import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";
import Image from "next/image";
import React from "react";
import ServiceMerque from "@/components/service-merque";

const teamMembers = [
  { name: "Steven Porreca", image: "/images/Leen_.jpeg" },
  { name: "Huey Apicella", image: "/images/Bertus is bloody cool_.jpeg" },
];

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/herramientas.jpeg"
          alt="About Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-oswald mb-4">
            About Us
          </h1>
          <div className="w-24 h-1 bg-[#aa7656] mx-auto"></div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <p className="text-lg md:text-xl text-center text-gray-300">
            Immerse yourself in the ambience of our thoughtfully designed space,
            where modern aesthetics merge harmoniously with classic elements. We
            believe that a barbershop should be more than just a place to get a
            haircut; it should be a sanctuary where you can unwind, engage in
            great conversation, and leave feeling invigorated.
          </p>
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg">
              <h2 className="text-3xl font-oswald mb-4 text-center">
                Our Vision
              </h2>
              <div className="w-24 h-1 bg-[#aa7656] mx-auto mb-6"></div>
              <p className="text-gray-300">
                At the heart of our vision is a commitment to preserving the
                time-honored traditions of barbering while seamlessly blending
                them with contemporary techniques and trends. We envision a
                space where heritage and innovation coexist harmoniously,
                creating an environment that appeals to the modern man seeking
                both classic sophistication and cutting-edge styles.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg">
              <h2 className="text-3xl font-oswald mb-4 text-center">
                Our Mission
              </h2>
              <div className="w-24 h-1 bg-[#aa7656] mx-auto mb-6"></div>
              <p className="text-gray-300">
                Our mission is to empower men to feel confident, stylish, and
                authentic in their appearance. Through our commitment to
                excellence, personalized service, inviting atmosphere, and a
                harmonious blend of tradition and innovation, we aspire to
                become the ultimate grooming destination for the modern
                gentleman.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-oswald text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <a href="#" className="text-white hover:text-bronze">
                        <RiFacebookFill size={24} />
                      </a>
                      <a href="#" className="text-white hover:text-bronze">
                        <RiTwitterFill size={24} />
                      </a>
                      <a href="#" className="text-white hover:text-bronze">
                        <RiInstagramLine size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold">{member.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceMerque />
      <Footer />
    </main>
  );
}
