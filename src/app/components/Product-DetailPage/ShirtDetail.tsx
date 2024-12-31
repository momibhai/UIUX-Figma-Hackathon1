"use client"
import Image from 'next/image';
import { useState } from 'react';
import Footer from '../HomePage/Footer';
import MainNav from '../navbar/MainNav';

const ShirtDetail = () => {
  const [activeImage, setActiveImage] = useState('/images/shirt1.png'); // Manage active image

  return (
    <>
    <MainNav />
    <div className="container mx-auto px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <span>Home</span> &gt; <span>Shop</span> &gt; <span>Men</span> &gt;{' '}
        <span className="font-medium text-black">T-shirts</span>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center gap-6">
        {/* Left - Thumbnail Images */}
        <div className="flex-1 flex flex-col items-center">
          <div className="flex lg:flex-col gap-4">
            {['/images/shirt1.png', '/images/shirt2.png', '/images/boy-shirt.png'].map((imgSrc, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(imgSrc)}
                className={`w-28 h-28 border rounded-md overflow-hidden cursor-pointer ${activeImage === imgSrc ? 'border-4 border-black' : 'border-gray-300'
                  }`}
              >
                <Image
                  src={imgSrc}
                  alt={`Shirt Thumbnail ${idx + 1}`}
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center - Main Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-3/4 h-[500px] border rounded-md overflow-hidden">
            <Image
              src={activeImage}
              alt="Main Shirt"
              width={700}
              height={700}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right - Details */}
        <div className="flex-1">
          {/* Title and Rating */}
          <h1 className="text-3xl font-bold mb-4">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center text-yellow-500 mb-6">
            <span className="text-lg">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
            <span className="ml-2 text-gray-500 text-sm">4.5/5</span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-black">$260</span>
            <span className="text-gray-400 line-through ml-4">$300</span>
            <span className="text-red-500 font-medium ml-2">-40%</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Select Colors */}
          <div className="mb-8">
            <p className="font-medium text-gray-700 mb-2">Select Colors</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-green-700 rounded-full border-2 border-black cursor-pointer"></div>
              <div className="w-10 h-10 bg-gray-700 rounded-full cursor-pointer"></div>
              <div className="w-10 h-10 bg-blue-900 rounded-full cursor-pointer"></div>
            </div>
          </div>

          {/* Choose Size */}
          <div className="mb-8">
            <p className="font-medium text-gray-700 mb-2">Choose Size</p>
            <div className="flex gap-4">
              {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                <button
                  key={size}
                  className="px-6 py-2 border rounded-md text-gray-700 hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-6">
            {/* Quantity Selector */}
            <div className="flex items-center border rounded-md px-4 py-2">
              <button className="text-xl font-bold">-</button>
              <span className="px-4">1</span>
              <button className="text-xl font-bold">+</button>
            </div>

            {/* Add to Cart Button */}
            <button className="px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center items-center border-b border-gray-300 pb-4 mb-6">
            <div className="flex gap-8 sm:gap-16 md:gap-32 lg:gap-[200px]">
              <button className="text-gray-500 font-semibold pb-1">Product Details</button>
              <button className="text-black font-semibold border-b-2 border-black pb-1">
                Rating & Reviews
              </button>
              <button className="text-gray-500 font-semibold pb-1">FAQs</button>
            </div>
          </div>


          {/* Reviews Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-left">All Reviews (451)</h2>

            {/* Buttons Section */}
            <div className="flex items-center gap-4">
              {/* Filter Icon */}
              <button className="flex items-center text-gray-500 border border-gray-300 px-3 py-2 rounded-lg">
                <span className="material-icons">filter</span> {/* Replace with an actual icon */}
              </button>

              {/* Latest Dropdown */}
              <select className="text-gray-500 border border-gray-300 px-3 py-2 rounded-lg cursor-pointer">
                <option value="latest" selected>Latest</option>
                <option value="oldest">Oldest</option>
                <option value="highest">Highest Rated</option>
              </select>

              {/* Write a Review Button */}
              <button className="bg-black text-white px-4 py-2 rounded-full font-medium">
                Write a Review
              </button>
            </div>
          </div>


          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Review Card */}
            <div className="border rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
                <button className="text-gray-500">•••</button>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Samantha D. <span className="text-green-500">✔</span>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to shirt.              </p>
              <p className="text-gray-400 text-xs">Posted on August 14, 2023</p>
            </div>

            <div className="border rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
                <button className="text-gray-500">•••</button>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Alex M. <span className="text-green-500">✔</span>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, Im quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.
              </p>
              <p className="text-gray-400 text-xs">Posted on August 15, 2023</p>
            </div>

            <div className="border rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
                <button className="text-gray-500">•••</button>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Ethan R. <span className="text-green-500">✔</span>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designers touch in every aspect of this shirt.
              </p>
              <p className="text-gray-400 text-xs">Posted on August 16, 2023</p>
            </div>

            <div className="border rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
                <button className="text-gray-500">•••</button>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Olivia P. <span className="text-green-500">✔</span>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. Its evident that the designer poured their creativity into making this t-shirt stand out.
              </p>
              <p className="text-gray-400 text-xs">Posted on August 17, 2023</p>
            </div>

            <div className="border rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
                <button className="text-gray-500">•••</button>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Samantha D. <span className="text-green-500">✔</span>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.
              </p>
              <p className="text-gray-400 text-xs">Posted on August 14, 2023</p>
            </div>

            <div className="border rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
                <button className="text-gray-500">•••</button>
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Alex M. <span className="text-green-500">✔</span>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.
              </p>
              <p className="text-gray-400 text-xs">Posted on August 15, 2023</p>
            </div>
          </div>



          {/* Load More Button */}
          <div className="mt-8 text-center">
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">
              Load More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Like Section */}
      <h2 className='text-center text-black font-bold text-5xl py-6'>YOU MIGHT ALSO LIKE</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image
            src="/images/Product1.png"
            alt="Polo with Contrast Trims"
            width={250}  // Set the width for the image
            height={300} // Set the height for the image
            className="object-cover rounded-lg mb-4 mx-auto"
          />
          <h3 className="text-gray-800 font-semibold text-sm mb-1 text-center">Polo with Contrast Trims</h3>
          <div className="text-yellow-500 text-sm mb-1 text-center">⭐⭐⭐⭐☆ 4.0/5</div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-black font-bold">$212</span>
            <span className="line-through text-gray-500">$242</span>
            <span className="text-red-500 text-sm">-20%</span>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image
            src="/images/Product2.png"
            alt="Gradient Graphic T-shirt"
            width={250}
            height={300}
            className="object-cover rounded-lg mb-4 mx-auto"
          />
          <h3 className="text-gray-800 font-semibold text-sm mb-1 text-center">Gradient Graphic T-shirt</h3>
          <div className="text-yellow-500 text-sm mb-1 text-center">⭐⭐⭐☆ 3.5/5</div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-black font-bold">$145</span>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image
            src="/images/Product3.png"
            alt="Polo with Tipping Details"
            width={250}
            height={300}
            className="object-cover rounded-lg mb-4 mx-auto"
          />
          <h3 className="text-gray-800 font-semibold text-sm mb-1 text-center">Polo with Tipping Details</h3>
          <div className="text-yellow-500 text-sm mb-1 text-center">⭐⭐⭐⭐☆ 4.5/5</div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-black font-bold">$180</span>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image
            src="/images/Product4.png"
            alt="Black Striped T-shirt"
            width={250}
            height={300}
            className="object-cover rounded-lg mb-4 mx-auto"
          />
          <h3 className="text-gray-800 font-semibold text-sm mb-1 text-center">Black Striped T-shirt</h3>
          <div className="text-yellow-500 text-sm mb-1 text-center">⭐⭐⭐⭐⭐ 5.0/5</div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-black font-bold">$120</span>
            <span className="line-through text-gray-500">$160</span>
            <span className="text-red-500 text-sm">-30%</span>
          </div>
        </div>
      </div>



      <br /><br />

      <Footer />

    </div>
    </>
  );
};

export default ShirtDetail;
