'use client'; // Ensure client-side rendering

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the Product interface
interface Product {
  category: string;
  sizes: string[];
  _id: string;
  description: string;
  imageUrl: string;
  discountPercent: number;
  isNew: boolean;
  colors: string[];
  name: string;
  price: number;
}

const NewArrivals: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch data from API
    async function importProducts() {
      try {
        const response = await fetch('/api/proxy'); // Ensure this proxy is configured
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const allProducts: Product[] = await response.json();
        // Filter products where isNew is true
        const newProducts = allProducts.filter((product) => product.isNew);
        setProducts(newProducts); // Update state with only new products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    importProducts();
  }, []);

  
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" id="new_arrival">
          NEW ARRIVALS
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col items-center bg-[#F9F9F9] p-4 rounded-lg shadow-md"
            >
              <Link href={`/Product-DetailPage/${product._id}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </Link>
              <h3 className="text-lg font-medium mt-4">{product.name}</h3>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-yellow-500 text-sm">★★★★☆</span>
                <span className="text-gray-600 text-sm">4.5/5</span>
              </div>
              <p className="text-xl font-bold text-black mt-2">
                ${product.price}
                {product.discountPercent > 0 && (
                  <>
                    <span className="line-through text-gray-500 ml-2">
                      ${((product.price / (1 - product.discountPercent / 100))).toFixed(2)}
                    </span>
                    <span className="text-red-500 text-sm ml-1">-{product.discountPercent}%</span>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <Link href="/CategoryPage">
            <button className="px-6 py-3 border border-black text-black text-lg rounded-full hover:bg-black hover:text-white transition">
              View All Category
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
