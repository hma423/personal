import React from 'react';
import sports from "../assets/images/sports.png";
import silence from "../assets/images/silence.png"
import esports from "../assets/images/esports.png"
import senior from "../assets/images/senior.png"
import handdrawn from "../assets/images/handdrawn.png"
import "./imagegallery.css";

interface ImageData {
  src: string;

}

const ImageGallery: React.FC = () => {
  const images: ImageData[] = [
    {src: sports},
    {src: senior}, 
    {src: handdrawn},
    {src: esports},
    {src:silence}
    
    // Add more images as needed
  ];

  return (
    <div className="scale-75 border-2 border-gray-300 rounded-lg">
      <div className="grid images sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={image.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageGallery;




