import React from "react";

const services = [
  "Haircut",
  "Shave",
  "Faded",
  "Hair Dye",
  "Beard Trim",
  "Hair Color",
  "Facial",
  "Massage",
  "Hair Wash",
];

export default function ServiceMerque() {
  return (
    <section className="py-8 bg-black overflow-hidden">
      <div className="flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <span className="text-2xl font-oswald mx-4">{service}</span>
              <span className="mx-4">
                <i className="w-3 h-3 bg-[#aa7656] inline-block rounded-full"></i>
              </span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex animate-marquee2 whitespace-nowrap">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <span className="text-2xl font-oswald mx-4">{service}</span>
              <span className="mx-4">
                <i className="w-3 h-3 bg-[#aa7656] inline-block rounded-full"></i>
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
