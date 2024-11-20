import { useState, useEffect } from "react";
import Carousel1 from "../assets/Carousel1.png";
import Carousel2 from "../assets/Carousel2.png";

const carouselImages = [
  { alt: "image 1", src: Carousel1 },
  { alt: "image 2", src: Carousel2 },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const nextImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      setIsFading(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Carousel Section */}
      <section className="flex justify-center mt-2 mx-5 h-32 md:h-52 lg:mx-48 lg:h-96 relative overflow-hidden rounded-md Animated-Fadein">
        {carouselImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className={`absolute w-full object-center object-cover transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </section>

      {/* Navigation Dots */}
      <section className="flex justify-center mt-1">
        <div className="flex">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-5 h-5 mx-1 rounded-full bg-gray-950 ${currentIndex === index ? "bg-gray-600" : ""}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Main Section */}
      <section className="flex justify-center mt-4 mx-5 lg:mx-48">
        <div className="Animated-Slideup">
          <div className="w-3/4 mx-auto bg-gray-950 rounded-md p-4">
            <h1 className="text-2xl text-white">Welcome to our website!</h1>
            <p className="text-white mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dignissim, nunc nec fermentum ultricies, lorem justo ultricies
              libero, nec tincidunt nisi erat nec purus. Sed ut nisi nec purus
              cursus ultricies. Donec nec eros auctor, tincidunt nunc nec, rhoncus
              libero. Nullam nec nunc
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
