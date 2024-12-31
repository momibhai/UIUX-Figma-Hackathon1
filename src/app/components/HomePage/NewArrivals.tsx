import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewArrivals = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" id="new_arrival">
          NEW ARRIVALS
        </h2>
       

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Product Card 1 */}
          <div className="flex flex-col items-center bg-[#F9F9F9] p-4 rounded-lg shadow-md">
          <Link href="/Product-DetailPage">
            <Image
              src="/images/black-shirt.png" // Replace with your T-shirt image path
              alt="T-shirt with Tape Details"
              width={200}
              height={200}
              className="object-contain"
            />
            </Link>
            <h3 className="text-lg font-medium mt-4">T-shirt with Tape Details</h3>
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
              src="/images/jeans-pent.png" // Replace with your Jeans image path
              alt="Skinny Fit Jeans"
              width={200}
              height={200}
              className="object-contain"
            />
            </Link>
            <h3 className="text-lg font-medium mt-4">Skinny Fit Jeans</h3>
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
              src="/images/red-white-shirt.png" // Replace with your Shirt image path
              alt="Checkered Shirt"
              width={200}
              height={200}
              className="object-contain"
            />
            </Link>
            <h3 className="text-lg font-medium mt-4">Checkered Shirt</h3>
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
              src="/images/orange-shirt.png" // Replace with your T-shirt image path
              alt="Sleeve Striped T-shirt"
              width={200}
              height={200}
              className="object-contain"
            />
            </Link>
            <h3 className="text-lg font-medium mt-4">Sleeve Striped T-shirt</h3>
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
        <Link href='/CategoryPage'>
          <button className="px-6 py-3 border border-black text-black text-lg rounded-full hover:bg-black hover:text-white transition">
            View All
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
