"use client"
import { Button } from "@/components/ui/button"
import useCart from "@/lib/hook/useCart"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

const CheckOutCart = () => {
  const { user } = useUser()
  const router = useRouter()
  const cart = useCart()

  const handleCheckOut = async () => {
    try {
      if (!user) {
        return router.push("/sign-in")
      }
      const customer = {
        clerkId: user?.id,
        email: user?.emailAddresses[0].emailAddress,
        name: user?.fullName,
      }
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
        method: "POST",
        body: JSON.stringify({
          cartItems: cart.cartItems,
          customer,
        }),
      })
      const data = await res.json()
      window.location.href = data.session.url
    } catch (error) {
      console.log("checkout_POST", error)
    }
  }

  return (
    <Button className="w-full" onClick={handleCheckOut}>
      Checkout
    </Button>
  )
}

export default CheckOutCart
