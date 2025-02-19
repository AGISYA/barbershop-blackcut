import { RiStarFill } from "react-icons/ri";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    comment: "Best haircut I've ever had! The attention to detail is amazing.",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Great atmosphere and skilled barbers. Highly recommended!",
  },
  {
    name: "Mike Johnson",
    rating: 5,
    comment:
      "The royal shave experience is out of this world. I feel like a new man!",
  },
];

export default function Reviews() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-oswald text-center mb-12">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-xl font-semibold">{review.name}</span>
                <div className="ml-auto flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <RiStarFill key={i} className="text-bronze" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
