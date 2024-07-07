import React, { useState } from 'react';
import tahoe from "../assets/images/tahoe.png"
import backpacking from "../assets/images/backpacking.png";
import waterpolo from "../assets/images/waterpolo.png";
import surfing from "../assets/images/surfing.png";
import skii from "../assets/images/skii.jpg";



interface ImageData {
  src: string;
  alt: string;
  description: string;
}

interface CarouselProps {
  images: ImageData[],
  name: String,
}

const Carousel: React.FC<CarouselProps> = ({ images , name}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsFlipped(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsFlipped(false);
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
    <div className = "pb-4">{name}</div>
      <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
        <div className={`w-full h-full transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className={`w-full h-full object-cover cursor-pointer ${isFlipped ? 'hidden' : ''}`}
            onClick={toggleFlip}
          />
          <div
            className={`absolute inset-0 bg-slate-400 p-4 flex items-center justify-center cursor-pointer ${
              isFlipped ? 'rotate-y-180' : 'hidden'
            }`}
            onClick={toggleFlip}
          >
            <p className="w-60 text-center text-sm">{images[currentIndex].description}</p>
          </div>
        </div>
        <button
        className="p-2 absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        onClick={prevImage}
      >
      </button>
      <button
        className=" p-2 absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        onClick={nextImage}
      >
      </button>
      </div>

    </div>
  );
};

const DualCarousel: React.FC = () => {
  const carouselData1: ImageData[] = [
    { src: tahoe, alt: "Image 1", description: "ever since i was a kid, i've enjoyed interacting with nature i.e. lake tahoe" },
    { src: backpacking, alt: "backpacking", description: "once i joined scouting, my connection to nature grew and my passion for backpacking blossomed. heres a photo of me leading my first backpacking trip! i'm holding the backapck of a fellow scout affected by altitude sickness" },
    { src: skii, alt: "Image 3", description: "been skiing since my dad taught me at a young age. really good way to get your adrenaline up"},
  ];

  const carouselData2: ImageData[] = [
    { src: waterpolo, alt: "Image 5", description: "picked up water polo after swimming for years, started playing in high school becoming captain of the hs team. i loved the sport so much i continued to play it in college" },
    { src: surfing, alt: "Image 6", description: "whenever im in the bay, surfing is one of the activites that i look forward to most. being among the waves is just comforting for me." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        <Carousel images={carouselData1} name ="land hobbies" />
        <Carousel images={carouselData2}  name = "water hobbies" />
      </div>
    </div>
  );
};

export default DualCarousel;