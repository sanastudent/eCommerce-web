
import Image from "next/image";



const MyComponent = () => {
  // Array containing the image paths
  const images = [
    "/gr1.png", 
    "/g2.png", 
    "/g3.png", 
    "/g4.png", 
    "/g5.png", 
    "/g6.png"
  ];

  return (
    <div className="flex flex-col items-center space-y-6"> {/* Adjusting the vertical space between images */}
      {images.map((image, index) => (
        <div key={index} className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
          {/* Tailwind classes for responsive width */}
          <Image 
            src={image} 
            width={1145} 
            height={254} 
            alt={`Image ${index + 1}`} 
            className="w-full h-auto rounded-lg" 
          />
        </div>
      ))}
    </div>
  );
};

export default MyComponent;

  