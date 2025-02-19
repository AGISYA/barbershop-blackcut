export default function HoursLocation() {
  const hours = [
    { days: "Mon - Thu", time: "7:30AM - 6:30PM" },
    { days: "Friday", time: "8:30AM - 8:30PM" },
    { days: "Sat - Sun", time: "9:30AM - 5:30PM" },
  ];

  const location = [
    { label: "Address", value: "100 Mainstreet Center, NY" },
    { label: "Phone", value: "+1 333 8080 1000" },
    { label: "Email", value: "contact@blaxcut.com" },
  ];

  return (
    <section className="py-20 noise-bg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Hours */}
          <div className="bg-black/40 backdrop-blur-sm p-8 border border-[#aa7656] /20">
            <h2 className="text-3xl font-oswald text-center mb-8">
              {" We're Open"}
            </h2>
            <div className="w-24 h-1 bg-[#aa7656]  mx-auto mb-8"></div>
            <div className="space-y-6">
              {hours.map((schedule) => (
                <div
                  key={schedule.days}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-400">{schedule.days}</span>
                  <span className="text-[#aa7656] ">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-black/40 backdrop-blur-sm p-8 border border-[#aa7656] /20">
            <h2 className="text-3xl font-oswald text-center mb-8">Location</h2>
            <div className="w-24 h-1 bg-[#aa7656]  mx-auto mb-8"></div>
            <div className="space-y-6">
              {location.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-400">{item.label}</span>
                  <span className="text-[#aa7656] ">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
