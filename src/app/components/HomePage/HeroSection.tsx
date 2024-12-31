import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#F2F0F1]">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between h-screen px-8 lg:px-24">
        {/* Left Content */}
        <div className="max-w-lg space-y-6 text-left">
          <h1 className="text-5xl font-extrabold md:text-6xl leading-tight text-black">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mt-4 px-8 py-3 bg-black text-white text-lg rounded-full shadow-lg w-[200px] hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
        {/* Right Image */}
        <div className="w-1/2 flex justify-end">
          <Image
            src="/images/girlmens.png"
            alt="Stylish models"
            className="object-contain max-h-[90vh] lg:max-h-[100vh]" // Restrict image height
            sizes="(max-width: 768px) 100vw, 
                  (max-width: 1200px) 50vw, 
                  33vw"
            width={600} // Full resolution width
            height={750} // Full resolution height
            priority={true}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center text-center space-y-6 px-4 py-8">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-tight text-black">
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p className="text-base text-gray-600">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="mt-4 px-6 py-3 bg-black text-white text-base rounded-full shadow-lg hover:bg-gray-800 transition w-full max-w-xs">
          Shop Now
        </button>
        {/* Stats */}
        <div className="w-full space-y-4">
          <div className="flex justify-between items-center w-full max-w-md mx-auto">
            <div className="text-center">
              <span className="block text-xl font-bold text-black">200+</span>
              <span className="text-sm text-gray-600">International Brands</span>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <span className="block text-xl font-bold text-black">2,000+</span>
              <span className="text-sm text-gray-600">High-Quality Products</span>
            </div>
          </div>
          <div className="text-center">
            <span className="block text-xl font-bold text-black">30,000+</span>
            <span className="text-sm text-gray-600">Happy Customers</span>
          </div>
        </div>
        {/* Image */}
        <div className="flex justify-center bg-[#F2F0F1]">
          <Image
            src="/images/girlmens.png"
            alt="Stylish models"
            className="object-contain"
            sizes="(max-width: 768px) 80vw, 
                  40vw"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
