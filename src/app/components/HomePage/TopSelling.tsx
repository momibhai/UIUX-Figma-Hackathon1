import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopSelling = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" id="on_sell">
        TOP SELLING
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Product Card 1 */}
          <div className="flex flex-col items-center bg-[#F9F9F9] p-4 rounded-lg shadow-md">
          <Link href="/Product-DetailPage">
            <Image
              src="/images/Product8.png" // Replace with your T-shirt image path
              alt="T-shirt with Tape Details"
              width={200}
              height={200}
              className="object-contain"
            />
            </Link>
            <h3 className="text-lg font-medium mt-4">Vertical Striped Shirt</h3>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-yellow-500 text-sm">★★★★☆</span>
              <span className="text-gray-600 text-sm">4.5/5</span>
            </div>
            <p className="text-xl font-bold text-black mt-2">$120</p>
          </div>

          {/* Product Card 2 */}
          <div className="flex flex-col items-center bg-[#F9F9F9] p-4 rounded-lg shadow-md">
          <Link href="/Product-DetailPage">
            <Image
              src="/images/Product9.png" // Replace with your Jeans image path
              alt="Skinny Fit Jeans"
              width={200}
              height={200}
              className="object-contain"
            />
            </Link>
            <h3 className="text-lg font-medium mt-4">Courage Graphic T-Shirt</h3>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-yellow-500 text-sm">★★★☆☆</span>
              <span className="text-gray-600 text-sm">3.5/5</span>
            </div>
            <p className="text-xl font-bold text-black mt-2">
              $240 <span className="line-through text-gray-500">$260</span>
              <span className="text-red-500 text-sm ml-1">-20%</span>
            </p>
          </div>

          {/* Product Card 3 */}
          <div className="flex flex-col items-center bg-[#F9F9F9] p-4 rounded-lg shadow-md">
          <Link href="/Product-DetailPage">
            <Image
              src="/images/Product10.png" // Replace with your Shirt image path
              alt="Checkered Shirt"
              width={200}
              height={200}
              className="object-contain"
            />
            </Link>
            <h3 className="text-lg font-medium mt-4">Loose Fit Bermuda Shorts</h3>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-yellow-500 text-sm">★★★★☆</span>
              <span className="text-gray-600 text-sm">4.5/5</span>
            </div>
            <p className="text-xl font-bold text-black mt-2">$180</p>
          </div>

          {/* Product Card 4 */}
          <div className="flex flex-col items-center bg-[#F9F9F9] p-4 rounded-lg shadow-md">
          <Link href="/Product-DetailPage">
            <Image
              src="/images/Product11.png" // Replace with your T-shirt image path
              alt="Sleeve Striped T-shirt"
              width={200}
              height={200}
              className="object-contain"
            />
            </Link>
            <h3 className="text-lg font-medium mt-4">Faded Skinny Jeans</h3>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-yellow-500 text-sm">★★★★☆</span>
              <span className="text-gray-600 text-sm">4.5/5</span>
            </div>
            <p className="text-xl font-bold text-black mt-2">
              $130 <span className="line-through text-gray-500">$160</span>
              <span className="text-red-500 text-sm ml-1">-30%</span>
            </p>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 border border-black text-black text-lg rounded-full hover:bg-black hover:text-white transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
