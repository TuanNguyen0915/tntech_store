"use client"

import useCart from "@/lib/hook/useCart"
import { ICartItem} from "@/lib/types"
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"

interface IQuantityCartProps {
  cartItem: ICartItem
}

const QuantityCart = ({ cartItem }: IQuantityCartProps) => {
  const cart = useCart()
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => {
          cart.decreaseQuantity(cartItem.item._id, cartItem.size, cartItem.color)
        }}
        type="button"
        className="disabled:cursor-not-allowed disabled:opacity-60"
      >
        <FaMinusCircle size={24} />
      </button>
      <p className="text-xl font-semibold">{cartItem.quantity}</p>
      <button
        type="button"
        onClick={() => cart.increaseQuantity(cartItem.item._id, cartItem.size, cartItem.color)}
      >
        <FaPlusCircle size={24} className="cursor-pointer" />
      </button>
    </div>
  )
}

export default QuantityCart
