"use client"
import { IProduct } from "@/lib/types"
import Image from "next/image"
import React from "react"
import ProductWishList from "../ProductWishList"
import { Button } from "@/components/ui/button"
import useCart from "@/lib/hook/useCart"

interface IWishListCardProps {
  product: IProduct
  lastIdx: boolean
}
const WishListCard = ({ product, lastIdx }: IWishListCardProps) => {
  const cart = useCart()
  return (
    <div
      className={`${!lastIdx && "border-b-2 border-border"} max-md:flexCol flex items-start justify-between pb-4`}
    >
      <div className="max-md:flexCenter w-1/2 max-md:w-full">
        <Image
          src={product.media[0]}
          alt={product.title}
          width={300}
          height={300}
        />
      </div>

      <div className="flexCol max-md: flexCenter w-1/2 gap-4 max-md:w-full">
        <h1 className="productTitle">{product.title}</h1>
        <p className="productPrice">${product.price}</p>
        <p className="productCate">{product.category}</p>
        <p className="productCate line-clamp-3">${product.description}</p>
        <div className="flexBetween w-full">
          <Button
            onClick={() =>
              cart.addItem({
                item: product,
                quantity: 1,
                size: product.sizes[0],
                color: product.colors[0],
              })
            }
            className="w-1/2"
          >
            Add to cart
          </Button>
          <ProductWishList productId={product._id} />
        </div>
      </div>
    </div>
  )
}

export default WishListCard
