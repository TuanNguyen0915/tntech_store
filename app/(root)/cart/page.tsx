"use client"
import QuantityCart from "@/components/shared/cart/QuantityCart"
import SummaryCart from "@/components/shared/cart/SummaryCart"
import { Button } from "@/components/ui/button"
import useCart from "@/lib/hook/useCart"

import { Trash } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const CartPage = () => {
  const router = useRouter()
  const cart = useCart()

  
  return (
    <div className="mt-10 w-full space-y-4">
      <div className="flex w-full justify-between gap-10 max-lg:flex-col">
        <div className="w-2/3 space-y-4 overflow-y-auto max-lg:w-full">
          <h1 className="heading2">Shopping Cart</h1>
          {cart.cartItems.length === 0 ? (
            <div className="w-full space-y-10">
              <p className="w-full text-center">Your cart is empty</p>
              <div className="flexCenter w-full">
                <Button className="w-1/2" onClick={() => router.push("/")}>
                  Continue shopping
                </Button>
              </div>
            </div>
          ) : (
            <div className="w-full space-y-10">
              {cart.cartItems.map((cartItem, idx) => (
                <div
                  key={idx}
                  className="flexBetween w-full gap-4 rounded-xl px-6 py-4 transition-all hover:bg-black/10 max-lg:flex-col"
                >
                  {/* INFO */}
                  <div
                    className="group flex w-2/3 cursor-pointer items-center gap-4 max-lg:w-full"
                    onClick={() =>
                      router.push(`/products/${cartItem.item._id}`)
                    }
                  >
                    <Image
                      src={cartItem.item.media[0]}
                      alt={cartItem.item.title}
                      width={150}
                      height={150}
                      className="rounded-lg object-cover"
                    />
                    <div className="space-y-4">
                      <p className="text-xl font-semibold transition-all group-hover:text-blue-500">
                        {cartItem.item.title.length > 30
                          ? cartItem.item.title.slice(0, 30) + "..."
                          : cartItem.item.title}
                      </p>
                      <p className="capitalize">{cartItem.color}</p>
                      <p className="capitalize">{cartItem.size}</p>
                      <p>${cartItem.item.price}</p>
                    </div>
                  </div>
                  <div className="flexBetween w-1/3 max-lg:w-full">
                    {/* QUANTITY */}
                    <QuantityCart cartItem={cartItem} />
                    {/* REMOVE */}
                    <Trash
                      size={24}
                      className="cursor-pointer text-red-500 transition-all hover:brightness-125"
                      onClick={() =>
                        cart.removeItem(
                          cartItem.item._id,
                          cartItem.size,
                          cartItem.color,
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <SummaryCart cart={cart} />
      </div>
    </div>
  )
}

export default CartPage
export const dynamic = "force-dynamic"
