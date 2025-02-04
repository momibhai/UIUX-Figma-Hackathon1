"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ product }) => {
  const discountedPrice = product.price * (1 - product.discountPercent / 100)

  return (
    <Link href={`/Product-DetailPage/${product._id}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          width={250}
          height={300}
          className="w-[250px] h-[300px] object-cover rounded-lg mb-4 mx-auto"
        />
        <h3 className="text-gray-800 font-semibold text-sm mb-1 text-center">{product.name}</h3>
        <div className="flex justify-center items-center gap-2">
          <span className="text-black font-bold">${discountedPrice.toFixed(2)}</span>
          {product.discountPercent > 0 && (
            <>
              <span className="line-through text-gray-500">${product.price.toFixed(2)}</span>
              <span className="text-red-500 text-sm">-{product.discountPercent}%</span>
            </>
          )}
        </div>
        {product.isNew && (
          <div className="mt-2 text-center">
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">New</span>
          </div>
        )}
      </div>
    </Link>
  )
}

const CategoryPage = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [colors, setColors] = useState([])
  const [sizes, setSizes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [selectedCategory, setSelectedCategory] = useState("")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedSizes, setSelectedSizes] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(9)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/proxy")
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }
        const data = await response.json()
        setProducts(data)
        setFilteredProducts(data)

        const uniqueCategories = Array.from(new Set(data.map((p) => p.category)))
        const uniqueColors = Array.from(new Set(data.flatMap((p) => p.colors)))
        const uniqueSizes = Array.from(new Set(data.flatMap((p) => p.sizes)))

        setCategories(uniqueCategories)
        setColors(uniqueColors)
        setSizes(uniqueSizes)

        const maxPrice = Math.max(...data.map((p) => p.price))
        setPriceRange([0, maxPrice])

        setLoading(false)
      } catch (err) {
        setError("Failed to fetch products. Please try again later.")
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    const applyFilters = () => {
      let filtered = products

      if (selectedCategory) {
        filtered = filtered.filter((p) => p.category === selectedCategory)
      }

      filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

      if (selectedColors.length > 0) {
        filtered = filtered.filter((p) => p.colors.some((c) => selectedColors.includes(c)))
      }

      if (selectedSizes.length > 0) {
        filtered = filtered.filter((p) => p.sizes.some((s) => selectedSizes.includes(s)))
      }

      setFilteredProducts(filtered)
      setCurrentPage(1)
    }

    applyFilters()
  }, [products, selectedCategory, priceRange, selectedColors, selectedSizes])

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-10 mb-16">
      <aside className="bg-white shadow-md p-6 md:ml-20 rounded-lg w-full md:w-1/5 border border-solid border-gray">
        <h3 className="text-lg font-bold mb-4">Filters</h3>

        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">Category</h4>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`text-sm ${
                    selectedCategory === category ? "text-black font-bold" : "text-gray-700 hover:text-black"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">Price Range</h4>
          <div className="flex items-center gap-4">
            <input
              type="number"
              min="0"
              max={priceRange[1]}
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-20 p-1 border rounded"
            />
            <span>-</span>
            <input
              type="number"
              min={priceRange[0]}
              max={Math.max(...products.map((p) => p.price))}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-20 p-1 border rounded"
            />
          </div>
          <input
            type="range"
            min="0"
            max={Math.max(...products.map((p) => p.price))}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full mt-2"
          />
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">Colors</h4>
          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <span
                key={color}
                className={`w-6 h-6 rounded-full border cursor-pointer ${
                  selectedColors.includes(color) ? "ring-2 ring-black" : ""
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
                onClick={() => {
                  if (selectedColors.includes(color)) {
                    setSelectedColors(selectedColors.filter((c) => c !== color))
                  } else {
                    setSelectedColors([...selectedColors, color])
                  }
                }}
              ></span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2">Size</h4>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`text-sm px-3 py-1 rounded-2xl ${
                  selectedSizes.includes(size) ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => {
                  if (selectedSizes.includes(size)) {
                    setSelectedSizes(selectedSizes.filter((s) => s !== size))
                  } else {
                    setSelectedSizes([...selectedSizes, size])
                  }
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          className="mt-6 bg-black text-white text-sm font-semibold py-3 px-4 rounded-full w-full"
          onClick={() => setCurrentPage(1)}
        >
          Apply Filter
        </button>
      </aside>

      <section className="w-full md:w-3/4">
        <h2 className="text-2xl font-bold mb-6">{selectedCategory || "All Products"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="flex justify-between items-center mt-8 mb-8">
          <button
            className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md disabled:opacity-50"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="flex items-center space-x-2">
            {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map((number) => (
              <button
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === number + 1 ? "bg-black text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {number + 1}
              </button>
            ))}
          </div>
          <button
            className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md disabled:opacity-50"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  )
}

export default CategoryPage

