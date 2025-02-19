import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Haircuts",
    image: "/images/haircuts (2).png",
  },
  {
    title: "Beard",
    image: "/images/bread.png",
  },
  {
    title: "Shaving",
    image: "/images/shaving.png",
  },
  {
    title: "Razor Blade",
    image: "/images/Razor Blade.png",
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-oswald text-[#aa7656] mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-bronze mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group"
              style={{
                transform: `translateY(${index * 20}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <div className="service-box p-4">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-oswald text-center">
                  {service.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-3 border-2 border-bronze text-bronze hover:bg-[#aa7656] hover:text-white transition-colors duration-200"
          >
            All Services & Prices
          </Link>
        </div>
      </div>
    </section>
  );
}
