import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "Top 5 Trending Hairstyles for Men",
    excerpt:
      "Discover the hottest hairstyles that are making waves this season.",
    image: "/images/top 5.png",
  },
  {
    title: "The Art of the Perfect Shave",
    excerpt:
      "Learn the techniques for achieving a smooth, irritation-free shave.",
    image: "/images/Make Your Own Style (Papan Reklame (Persegi)).png",
  },
  {
    title: "Grooming Tips for a Well-Maintained Beard",
    excerpt: "Expert advice on keeping your beard looking its best.",
    image: "/images/perawatan bread.png",
  },
];

export default function Blog() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-oswald text-[#835b42] text-center mb-12">
          Latest from Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-black rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link
                  href="/blog"
                  className="text-[#aa7656] hover:text-[#835b42] transition-colors duration-200"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 border-2 border-[#aa7656] text-[#aa7656] hover:bg-[#835b42] hover:text-white transition-colors duration-200"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
