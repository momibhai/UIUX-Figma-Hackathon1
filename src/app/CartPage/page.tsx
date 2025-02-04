"use client";

import { useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import Image from "next/image";

const CartPage = () => {
  const { state, dispatch } = useCart();
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const fetchDiscount = async () => {
      try {
        const response = await fetch("/api/discount");
        const data = await response.json();
        setDiscount(data.discountPercentage);
      } catch (error) {
        console.error("Error fetching discount:", error);
      }
    };
    fetchDiscount();
  }, []);

  const subtotal = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discountAmount = (subtotal * discount) / 100;
  const deliveryFee = 0;
  const total = subtotal - discountAmount + deliveryFee;

  const handleRemoveProduct = (
    productId: string,
    color: string,
    size: string
  ) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { _id: productId, selectedColor: color, selectedSize: size },
    });
    toast.success("Product removed from cart");
  };

  const handleUpdateQuantity = (
    productId: string,
    color: string,
    size: string,
    newQuantity: number
  ) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        _id: productId,
        selectedColor: color,
        selectedSize: size,
        quantity: newQuantity,
      },
    });
  };

  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">YOUR CART</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {state.cartItems.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
              state.cartItems.map((item) => (
                <div
                  key={`${item._id}-${item.selectedColor}-${item.selectedSize}`}
                  className="bg-white p-6 rounded-lg shadow-md relative"
                >
                  <button
                    className="absolute top-4 right-4 text-red-500 text-lg"
                    onClick={() =>
                      handleRemoveProduct(
                        item._id,
                        item.selectedColor,
                        item.selectedSize
                      )
                    }
                  >
                    <TrashIcon className="w-6 h-6 text-red-600 hover:text-red-800" />
                  </button>
                  <div className="flex gap-6 items-center">
                    <Image
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.name}
                      className="w-[150px] h-[160px] rounded-lg object-cover"
                    />
                    <div className="flex flex-col justify-between space-y-2">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-500 text-sm">
                        Size: {item.selectedSize}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Color: {item.selectedColor}
                      </p>
                      <span className="text-2xl font-semibold">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <div className="flex items-center border rounded-2xl bg-gray-200">
                      <button
                        className="px-3 py-1 text-gray-500"
                        onClick={() => {
                          // Decrease the product quantity
                          handleUpdateQuantity(
                            item._id,
                            item.selectedColor,
                            item.selectedSize,
                            item.quantity - 1
                          );

                          // Show success toast message
                          toast.success("Product decreased in cart");
                        }}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>

                      <span className="px-3 py-1">{item.quantity}</span>
                      <button
                        className="px-3 py-1 text-gray-500"
                        onClick={() => {
                          handleUpdateQuantity(
                            item._id,
                            item.selectedColor,
                            item.selectedSize,
                            item.quantity + 1
                          );
                          toast.success("Product Increased from cart");
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <hr className="mt-5 mb-5" />
                </div>
              ))
            )}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Discount ({discount}%)</span>
                <span className="text-red-500 font-semibold">
                  -${discountAmount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Delivery Fee</span>
                <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-between">
              <span className="font-semibold text-lg">Total</span>
              <span className="font-semibold text-lg">${total.toFixed(2)}</span>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full border border-gray-300 rounded-3xl px-4 py-2 mb-4"
              />
              <button className="w-full bg-black text-white rounded-3xl px-4 py-2">
                Apply
              </button>
            </div>
            <button className="w-full bg-black text-white rounded-3xl px-4 py-3 mt-4">
              Go to Checkout →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
