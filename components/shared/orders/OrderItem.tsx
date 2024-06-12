import { IProduct } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface IOrderItemProps {
  product: IProduct
  quantity: number
  size?: string
  color?: string
}
const OrderItem = ({ product, quantity, size, color }: IOrderItemProps) => {
  return (
    <div className="flexBetween max-md:flexCol gap-10 max-md:gap-4">
      <Link href={`/products/${product._id}`}>
        <Image
          src={product.media[0]}
          alt={product.title}
          width={150}
          height={150}
          className="rounded-lg"
        />
      </Link>
      <div className="flexBetween w-full">
        <p>
          Quantity: <span className="text-blue-500">{quantity}</span>
        </p>
        <p>
          Size: <span className="text-blue-500">{size}</span>
        </p>
        <p>
          Price: <span className="text-blue-500">${product.price}</span>
        </p>
        <p>
          Total:{" "}
          <span className="text-blue-500">${product.price * quantity}</span>
        </p>
      </div>
    </div>
  )
}

export default OrderItem
