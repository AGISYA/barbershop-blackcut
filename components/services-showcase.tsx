import Image from "next/image";

const services = [
  { name: "Haircuts", image: "/placeholder.svg?height=400&width=300" },
  { name: "Beard", image: "/placeholder.svg?height=400&width=300" },
  { name: "Shaving", image: "/placeholder.svg?height=400&width=300" },
  { name: "Razor Blade", image: "/placeholder.svg?height=400&width=300" },
];

export default function ServicesShowcase() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="relative overflow-hidden mb-4">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  width={300}
                  height={400}
                  className="rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              </div>
              <h4 className="text-xl font-oswald">{service.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
