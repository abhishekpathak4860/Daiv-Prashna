import { useParams } from "react-router-dom";
import testimonialsData from "../testimonialData";
import { useEffect } from "react";

export default function TestimonialDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const testimonial = testimonialsData.find((t) => t._id === id);

  if (!testimonial) {
    return <p className="text-center text-red-500">No testimonial found!</p>;
  }

  return (
    <div className=" flex flex-col items-center justify-center p-4 bg-[rgb(255,255,240)] min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-2 md:p-8 max-w-md md:w-full text-center relative">
        {/* Quote Icon */}
        <div className="absolute top-4 left-4 text-4xl text-blue-400">“</div>

        {/* User Image */}
        <div className="flex justify-center mb-4">
          <img
            src={`/${testimonial.image}`}
            alt={testimonial.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>

        {/* Stars */}
        <div className="flex justify-center mb-4">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <span key={index} className=" text-xl text-yellow-400">
              ★
            </span>
          ))}
        </div>

        {/* Review */}
        <p className="text-gray-600 italic mb-6">{testimonial.detail_review}</p>

        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-800">
          {testimonial.name}
        </h2>
        <div className="absolute bottom-4 right-4 text-4xl text-blue-400">
          “
        </div>
        {/* Static Profession */}
        <p className="text-blue-500 font-medium">Devotee</p>
      </div>
    </div>
  );
}
