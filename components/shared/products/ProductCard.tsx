"use client"
import { IProduct } from "@/lib/types"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductWishList from "../ProductWishList"
import useCart from "@/lib/hook/useCart"

interface IProductCardProps {
  product: IProduct
}

const ProductCard = ({ product }: IProductCardProps) => {
  const cart = useCart()
  return (
    <div className="flexCenter group flex-col gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-black/10">
      <Link
        href={`/products/${product._id}`}
        key={product._id}
        className="flexCenter overflow-hidden rounded-lg"
      >
        <div className="flexCenter relative h-[300px] w-[300px] rounded-lg">
          <Image
            src={product.media[0]}
            key={product._id}
            alt={product.title}
            fill
            className="cursor-pointer rounded-lg object-contain transition-all duration-300  group-hover:scale-110"
          />
        </div>
      </Link>
      <div className="flexCol w-full flex-1 gap-2">
        <h1 className="productTitle">
          {product.title.length > 20
            ? `${product.title.slice(0, 20)}...`
            : product.title}
        </h1>
        <p className="productCate">{product.category}</p>
        <p className="productPrice">${product.price}</p>
      </div>
      <div className="flexBetween w-full cursor-pointer px-2">
        <ProductWishList productId={product._id} />
        <Button
          onClick={() =>
            cart.addItem({
              item: product,
              quantity: 1,
              size: product.sizes[0],
              color: product.colors[0],
            })
          }
        >
          Add to cart
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
