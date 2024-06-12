"use client"

import Container from "@/components/shared/Container"
import Loader from "@/components/shared/Loader"

import WishListCard from "@/components/shared/wishlist/WishListCard"
import { getProductById } from "@/lib/actions"
import { useUserStore } from "@/lib/hook/useUser"
import { IProduct } from "@/lib/types"
import { useEffect, useState, useTransition } from "react"

const WishListPage = () => {
  const { currentUser } = useUserStore()
  const [wishList, setWishList] = useState<IProduct[] | null>()
  const [transition, setTransition] = useTransition()
  useEffect(() => {
    setTransition(async () => {
      if (currentUser?.wishList) {
        const res = await Promise.all(
          currentUser.wishList.map(async (productId) => {
            const product = await getProductById(productId)
            return product
          }),
        )
        setWishList(res)
      }
    })
  }, [currentUser])

  if (transition) {
    return (
      <div className="flexCenter h-[80vh] w-full">
        <Loader size={50} />
      </div>
    )
  }

  return (
    <Container>
      <div className="flexCol mt-10 w-full gap-8">
        <h1 className="heading2 text-center">Wishlist </h1>
        <div className="flexCenter flex-wrap gap-4 lg:gap-10">
          {!wishList || !wishList.length ? (
            <div>
              <p className="heading2 text-center text-gray-400">
                No products in your wishlist
              </p>
            </div>
          ) : (
            wishList?.map((product, idx) => (
              <WishListCard
                key={product._id}
                product={product}
                lastIdx={idx === wishList.length - 1}
              />
            ))
          )}
        </div>
      </div>
    </Container>
  )
}

export default WishListPage
export const dynamic = "force-dynamic"
