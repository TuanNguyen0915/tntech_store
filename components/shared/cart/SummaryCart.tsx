"use client"
import { ICartStore } from "@/lib/hook/useCart"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import CheckOutCart from "./CheckOutCart"

interface IQuantityCartProps {
  cart: ICartStore
}

const SummaryCart = ({ cart }: IQuantityCartProps) => {
  const [subTotal, setSubTotal] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const sub = cart.cartItems.reduce(
      (acc: number, cartItem) => acc + cartItem.item.price * cartItem.quantity,
      0,
    )
    const subRound = parseFloat(sub.toFixed(2))
    setSubTotal(subRound)

    setTax(parseFloat((subRound * 0.07).toFixed(2)))
    setTotal(parseFloat((subRound + tax).toFixed(2)))
  }, [cart, subTotal, tax, total])

  return (
    <div className="flexBetween sticky w-1/3 flex-col space-y-4 rounded-lg bg-slate-200/50 p-4 max-lg:w-full ">
      <div className="w-full space-y-4">
        <h1 className="heading2">
          Summary (
          {cart.cartItems.length === 1
            ? "1 item"
            : `${cart.cartItems.length} items`}
          )
        </h1>
        <div className="w-full space-y-4">
          {cart.cartItems.map((cartItem, idx) => (
            <div
              key={idx}
              className={`flexCenter w-full pb-5 pl-10 ${idx === cart.cartItems.length - 1 && "border-b border-gray-400"}`}
            >
              <div
                className={`${idx < cart.cartItems.length - 1 && "border-b border-gray-400"} flexBetween w-full `}
              >
                <p>
                  {cartItem.item.title.length < 25
                    ? cartItem.item.title
                    : `${cartItem.item.title.substring(0, 25)}...`}{" "}
                  (x{cartItem.quantity})
                </p>
                <p>$ {(cartItem.item.price * cartItem.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="flexCol w-full items-end">
            <div className="flexBetween w-3/4">
              <p className="text-lg font-semibold">Subtotal:</p>
              <p className="text-end">$ {subTotal}</p>
            </div>

            <div className="flexBetween w-3/4">
              <p className="text-lg font-semibold">Tax (7%):</p>
              <p className="text-end">$ {tax}</p>
            </div>
            <div className="flexBetween w-3/4">
              <p className="text-xl font-semibold">Total:</p>
              <p className="text-end text-xl font-semibold">$ {total}</p>
            </div>
          </div>
        </div>
      </div>
      {/* CHECKOUT BUTTON */}
      <CheckOutCart />
    </div>
  )
}

export default SummaryCart
