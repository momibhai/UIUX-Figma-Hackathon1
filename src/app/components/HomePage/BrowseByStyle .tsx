import React from "react";
import Image from "next/image";

const BrowseByStyle = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center py-8">
      <div className="w-[80vw] h-[80vh] relative">
        <Image
          src="/images/dress-style.png" // Replace with your image path
          alt="Casual Style"
          layout="fill" // Makes the image fill the container
          objectFit="cover" // Ensures the image covers the container without distortion
          className="rounded-md" // Optional: Adds subtle rounding to the edges
        />
      </div>
    </section>

  
  
  );
};

export default BrowseByStyle;
