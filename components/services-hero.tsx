import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/placeholder.svg?height=800&width=1200"
        alt="Barbershop services"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-oswald mb-4">
          Services
        </h1>
        <div className="w-24 h-1 bg-bronze mx-auto"></div>
      </div>
    </section>
  );
}
