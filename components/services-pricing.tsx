const pricingData = [
  {
    category: "Haircut",
    services: [
      { name: "Regular Haircut", price: 37 },
      { name: "Scissors Haircut", price: 40 },
      { name: "Kids Haircut", price: 30 },
    ],
  },
  {
    category: "Shave",
    services: [
      { name: "Head Shave", price: 27 },
      { name: "Royal Shave", price: 33 },
      { name: "Royal Head Shave", price: 33 },
      { name: "Beard Trim No Shave", price: 35 },
      { name: "Beard Trim Shave", price: 35 },
      { name: "Beard Shave Up", price: 30 },
    ],
  },
  {
    category: "Facial",
    services: [
      { name: "Deep Pore Cleansing", price: 50 },
      { name: "Aromatherapy Facial", price: 45 },
      { name: "Acne Problem Facial", price: 60 },
      { name: "European Facial", price: 50 },
      { name: "Glycolic Peel Facial", price: 35 },
    ],
  },
  {
    category: "Package",
    services: [
      { name: "Haircut + Shave", price: 50 },
      { name: "Haircut + Beard Trim", price: 50 },
      { name: "Haircut + Beard Trim Shave", price: 55 },
      { name: "Haircut + Beard Shape Up", price: 60 },
    ],
  },
];

export default function ServicesPricing() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingData.map((category, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-oswald mb-4 text-bronze">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-300">{service.name}</span>
                    <span className="text-bronze">${service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
