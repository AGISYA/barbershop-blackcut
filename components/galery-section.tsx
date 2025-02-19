"use client";

import { useState } from "react";
import Image from "next/image";
import { RiCloseLine } from "react-icons/ri";

const galleryImages = [
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-oswald mb-8 text-center">Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-3xl max-h-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Selected gallery image"
              width={600}
              height={600}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-bronze transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <RiCloseLine size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
