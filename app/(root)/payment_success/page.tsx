"use client"
import { Button } from "@/components/ui/button"
import useCart from "@/lib/hook/useCart"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

const PaymentSuccessPage = () => {
  const cart = useCart()
  useEffect(() => {
    cart.clearCart()
  }, [])
  return (
    <div className="flexCenter h-screen w-full">
      <div className="flexCenter flexCol relative gap-10 rounded-xl bg-slate-700/10 p-10 transition-all hover:bg-slate-500/20">
        <p className="heading1 mt-10 bg-gradient-to-r from-blue-500 from-30% via-fuchsia-500 via-60% to-pink-500 to-100% bg-clip-text font-bold leading-[50px] text-transparent">
          Successful Payment
        </p>
        <p className="">Thank you for your purchase</p>
        <Link href={"/"}>
          <Button>Continue Shopping</Button>
        </Link>
        <div className="flexCenter absolute -right-10 -top-10 z-10 rounded-full bg-white p-2">
          <CheckCircle size={100} className=" text-green-500" />
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccessPage
