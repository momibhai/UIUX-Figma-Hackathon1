"use client"

import type React from "react"
import { createContext, useReducer, useContext, useEffect, type ReactNode } from "react"

interface CartItem {
  _id: string
  name: string
  price: number
  imageUrl: string
  quantity: number
  selectedColor: string
  selectedSize: string
}

interface CartState {
  cartItems: CartItem[]
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: { _id: string; selectedColor: string; selectedSize: string } }
  | { type: "UPDATE_QUANTITY"; payload: { _id: string; selectedColor: string; selectedSize: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "SET_CART"; payload: CartItem[] }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

const initialState: CartState = {
  cartItems: [],
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let newState: CartState
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex(
        (item) =>
          item._id === action.payload._id &&
          item.selectedColor === action.payload.selectedColor &&
          item.selectedSize === action.payload.selectedSize,
      )
      if (existingItemIndex > -1) {
        const updatedCartItems = [...state.cartItems]
        updatedCartItems[existingItemIndex].quantity += action.payload.quantity
        newState = {
          ...state,
          cartItems: updatedCartItems,
        }
      } else {
        newState = {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        }
      }
      break

    case "REMOVE_FROM_CART":
      newState = {
        ...state,
        cartItems: state.cartItems.filter(
          (item) =>
            !(
              item._id === action.payload._id &&
              item.selectedColor === action.payload.selectedColor &&
              item.selectedSize === action.payload.selectedSize
            ),
        ),
      }
      break

    case "UPDATE_QUANTITY":
      newState = {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload._id &&
          item.selectedColor === action.payload.selectedColor &&
          item.selectedSize === action.payload.selectedSize
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      }
      break

    case "CLEAR_CART":
      newState = {
        ...state,
        cartItems: [],
      }
      break

    case "SET_CART":
      newState = {
        ...state,
        cartItems: action.payload,
      }
      break

    default:
      return state
  }

  localStorage.setItem("cart", JSON.stringify(newState.cartItems))
  return newState
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      dispatch({ type: "SET_CART", payload: JSON.parse(savedCart) })
    }
  }, [])

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "cart") {
        const newCart = e.newValue ? JSON.parse(e.newValue) : []
        dispatch({ type: "SET_CART", payload: newCart })
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

