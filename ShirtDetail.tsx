'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // For accessing URL query parameters
import Footer from './src/app/components/HomePage/Footer';
import MainNav from './src/app/components/navbar/MainNav';

// Define Product Interface
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercent: number;
  colors: string[];
  sizes: string[];
  imageUrl: string;
  rating: number;
}

const ShirtDetail = () => {
  const searchParams = useSearchParams(); // Access query parameters
  const id = searchParams.get('id'); // Get `id` from URL
  const [product, setProduct] = useState<Product | null>(null); // Store product details

  useEffect(() => {
    if (!id) return; // Exit if no `id` is found in the URL

    // Fetch product details by `id`
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/proxy`); // Replace with your endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const products: Product[] = await response.json();
        const foundProduct = products.find((p) => p._id === id); // Find product by ID
        setProduct(foundProduct || null); // Update state or set to null if not found
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="text-center py-8">Loading product details...</p>;
  }

  // Calculate discounted price
  const discountedPrice = product.discountPercent
    ? (product.price - (product.price * product.discountPercent) / 100).toFixed(2)
    : null;

  return (
    <>
      <MainNav />
      <div className="container mx-auto px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6">
          <span>Home</span> &gt; <span>Shop</span> &gt;{' '}
          <span className="font-medium text-black">{product.name}</span>
        </nav>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Left - Image */}
          <div className="flex-1 flex justify-center">
            <div className="w-3/4 h-[500px] border rounded-md overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={700}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right - Product Details */}
          <div className="flex-1">
            {/* Title and Rating */}
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center text-yellow-500 mb-6">
              <span className="text-lg">{'★'.repeat(Math.floor(product.rating))}</span>
              <span className="ml-2 text-gray-500 text-sm">{product.rating}/5</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-black">${discountedPrice || product.price}</span>
              {discountedPrice && (
                <>
                  <span className="text-gray-400 line-through ml-4">${product.price}</span>
                  <span className="text-red-500 font-medium ml-2">-{product.discountPercent}%</span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Colors */}
            <div className="mb-8">
              <p className="font-medium text-gray-700 mb-2">Select Colors</p>
              <div className="flex gap-4">
                {product.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <p className="font-medium text-gray-700 mb-2">Choose Size</p>
              <div className="flex gap-4">
                {product.sizes.map((size) => (
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
      </div>
      <Footer />
    </>
  );
};

export default ShirtDetail;
