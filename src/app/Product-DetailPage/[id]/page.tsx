"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useCart } from "@/app/context/CartContext"
import { useUser } from "@clerk/nextjs"
import { toast } from 'react-hot-toast';

interface Product {
  _id: number
  name: string
  description: string
  price: number
  discountPercent: number
  colors: string[]
  sizes: string[]
  imageUrl: string
  rating: number
}

const ShirtDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(1)
  const { dispatch } = useCart()

  // Get the user state from Clerk
  const { isSignedIn } = useUser()  // This gives us the authentication state

  const rating = Math.floor(Math.random() * 3) + 3

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("/api/proxy")
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const products: Product[] = await response.json()
        const foundProduct = products.find((p) => p._id === Number(id)) // Fix comparison
        setProduct(foundProduct || null)
      } catch (error) {
        console.error("Error fetching product:", error)
      }
    }

    fetchProduct()
  }, [id])

  if (!product) {
    return <p className="text-center py-8">Loading product details...</p>
  }

  const discountedPrice = product.discountPercent
    ? (product.price - (product.price * product.discountPercent) / 100).toFixed(2)
    : null

  const handleAddToCart = () => {
    // Check if the user is signed in
    if (!isSignedIn) {
      toast.error("Please log in first to add products to the cart.")
      return
    }

    // Ensure that the user has selected a color and size
    if (!selectedColor || !selectedSize) {
      toast.error("Please select a color and size.")
      return
    }

    const cartItem = {
      _id: product._id.toString(), // Convert _id to string
      name: product.name,
      price: Number.parseFloat(discountedPrice || product.price.toString()),
      imageUrl: product.imageUrl,
      quantity,
      selectedColor,
      selectedSize,
    }

    dispatch({ type: "ADD_TO_CART", payload: cartItem })
    toast.success(`${quantity} product added to cart!`)
  }

  return (
    <>
      <div className="container mx-auto px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <span>Home</span> &gt; <span>Shop</span> &gt; <span className="font-medium text-black">{product.name}</span>
        </nav>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1 flex justify-center">
            <div className="w-3/4 h-[500px] border rounded-md overflow-hidden">
              <Image
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.name}
                width={700}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center text-yellow-500 mb-6">
              <span className="text-lg">{"★".repeat(Math.floor(rating))}</span>
              <span className="ml-2 text-gray-500 text-sm">{rating}/5</span>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold text-black">${discountedPrice || product.price}</span>
              {discountedPrice && (
                <>
                  <span className="text-gray-400 line-through ml-4">${product.price}</span>
                  <span className="text-red-500 font-medium ml-2">-{product.discountPercent}%</span>
                </>
              )}
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-8">
              <p className="font-medium text-gray-700 mb-2">Select Colors</p>
              <div className="flex gap-4">
                {product.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className={`w-10 h-10 rounded-full cursor-pointer ${selectedColor === color ? "ring-2 ring-black" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <p className="font-medium text-gray-700 mb-2">Choose Size</p>
              <div className="flex gap-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-6 py-2 border rounded-md text-gray-700 hover:bg-gray-200 ${selectedSize === size ? "bg-gray-200" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center border rounded-md px-4 py-2">
                <button className="text-xl font-bold" onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}>
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                  className="w-12 text-center"
                />
                <button className="text-xl font-bold" onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <button
                className="px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShirtDetail
