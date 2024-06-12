"use client"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { getWishList } from "@/lib/actions/user.action"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useUserStore } from "@/lib/hook/useUser"


const ProductWishList = ({ productId }: { productId: string }) => {
  const router = useRouter()
  const { user } = useUser()
  const { currentUser, setCurrentUser } = useUserStore()
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (currentUser) {
      if (currentUser.wishList.includes(productId)) {
        setIsLiked(true)
      } else {
        setIsLiked(false)
      }
    }
  }, [currentUser, productId])
  const handleWishlist = async () => {
    if (!user) {
      router.push("/sign-in")
      return
    }
    const res = await getWishList(productId)
    if (!res.success) {
      toast.error(res.message)
      return
    }
    setCurrentUser(res.user)
    setIsLiked(!isLiked)
    const message = isLiked ? "Removed from wishlist" : "Added to wishlist"
    toast.success(message)
  }

  return (
    <>
      {isLiked ? (
        <FaHeart className="text-red-500 cursor-pointer" size={24} onClick={handleWishlist} />
      ) : (
        <FaRegHeart size={24} onClick={handleWishlist}  className="cursor-pointer"/>
      )}
    </>
  )
}

export default ProductWishList
