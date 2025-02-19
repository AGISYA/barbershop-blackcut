import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Premium Beard Oil",
    price: 24.99,
    image: "/images/Premium Beard Oil.png",
  },
  {
    name: "Styling Pomade",
    price: 18.99,
    image: "/images/Styling Pomade.png",
  },
  {
    name: "Luxury Shaving Kit",
    price: 89.99,
    image: "/images/Luxury Shaving Kit.png",
  },
  {
    name: "Hair Clay",
    price: 21.99,
    image: "/images/hair clay.png",
  },
];

export default function Products() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-oswald text-[#aa7656] text-center mb-12">
          Shop Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-[#aa7656] mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <button className="w-full bg-[#aa7656] hover:bg-[#aa7656]-dark text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-block px-8 py-3 border-2 border-[#aa7656] text-[#aa7656] hover:bg-[#aa7656] hover:text-white transition-colors duration-200"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
