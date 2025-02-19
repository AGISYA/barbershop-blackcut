import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import BookingCTA from "@/components/booking-cta";

const services = [
  {
    name: "Classic Haircut",
    description: "A timeless cut tailored to your style and face shape.",
    price: 35,
  },
  {
    name: "Beard Trim",
    description: "Expert shaping and trimming for a well-groomed beard.",
    price: 25,
  },
  {
    name: "Hot Towel Shave",
    description: "Luxurious straight razor shave with hot towel treatment.",
    price: 40,
  },
  {
    name: "Hair Coloring",
    description: "Professional color services to enhance or change your look.",
    price: 65,
  },
  {
    name: "Kids Haircut",
    description: "Gentle and fun haircuts for our younger clients.",
    price: 25,
  },
  {
    name: "Facial Treatment",
    description: "Rejuvenating facial to cleanse and nourish your skin.",
    price: 50,
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-oswald text-[#aa7656] text-center mb-12">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">{service.name}</h2>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <p className="text-[#aa7656] text-xl">${service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
