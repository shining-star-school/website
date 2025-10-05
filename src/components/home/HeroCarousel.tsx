
import { useState, useEffect } from 'react';
import c1 from '@/assets/c1.jpg';
import c2 from '@/assets/c2.jpg';
import c3 from '@/assets/c3.jpg';


const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: c1,
      title: "India's Best Experiential School",
      subtitle: "Where learning comes alive through hands-on experiences"
    },
    {
      image: c2,
      title: "360° Holistic Development",
      subtitle: "Nurturing minds, hearts, and spirits of every child"
    },
    {
      image: c3,
      title: "Where Learning Begins with Wonder",
      subtitle: "Igniting curiosity and creativity in young minds"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[70vh] overflow-hidden rounded-2xl shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight animate-slide-up">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl font-quicksand opacity-90 animate-fade-in">
                  {slide.subtitle}
                </p>
                <div className="flex space-x-4 pt-4">
                  <a href="/contact"><button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Contact Us
                  </button> </a>
                  <a href="/about"><button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                    Learn More
                  </button> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-yellow-500 scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        ←
      </button> */
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
      >
        →
      </button> }
    </div>
  );
};




export default HeroCarousel;
