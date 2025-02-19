import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const galleryImages = [
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
  "/placeholder.svg?height=400&width=400",
];

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-oswald text-center mb-12">Our Work</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
