import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

const items = [
  {
    id: 2,
    imageUrl: "/testimonial1.png",
    title: "Chats & Wraps",
    subTitle: "",
    description:
      "Working with Edgenus has been a game-changer for our brand. They didn’t just enhance our social presence; they built a solid portfolio and amplified our brand value. The buzz they created brought in more leads than we ever expected. Their hands-on, creative approach perfectly aligned with our vision. We couldn't have asked for a better partner in our growth journey!",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      // Mobile screen
      if (currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      // Larger screens
      if (currentIndex < items.length - 2) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Carousel Items */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform:
              typeof window !== "undefined" && window.innerWidth < 768
                ? `translateX(-${currentIndex * 100}%)` // For mobile (full width)
                : `translateX(-${currentIndex * 50}%)`, // For desktop (half width)
          }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full md:w-1/2 md:p-4 flex-shrink-0">
              <img
                src={item.imageUrl}
                alt={item.description}
                className="w-full h-2/5 md:h-3/5 object-cover rounded-lg"
              />
              <div className="overflow-scroll">
                <p className="text-22 md:text-24 xl:text-44 font-semibold mt-3">
                  {item.title}
                </p>
                <p className="text-normal md:text-22 xl:text-28 font-semibold">
                  {item.subTitle}
                </p>
                <p className="mt-2 text-normal md:text-22 xl:text-28 font-medium text-[#3F3D56CC]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow Button */}
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-10  p-2 rounded-full -translate-y-1/2 "
        >
          <ChevronLeft className="text-[3rem]" />
        </button>
      )}

      {/* Right Arrow Button */}
      {currentIndex !== items.length && (
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-10  p-2 rounded-full -translate-y-1/2"
        >
          <ChevronRight className="text-[3rem]" />
        </button>
      )}
    </div>
  );
}
