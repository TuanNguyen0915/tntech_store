"use client"
import { IProduct } from "@/lib/types"
import Image from "next/image"
import { useState } from "react"

interface IProductMediaProps {
  product: IProduct
  style?: string
  imgDimension?: string
  smallImgDimension?: string
}

const ProductMedia = ({
  product,
  style,
  imgDimension,
  smallImgDimension,
}: IProductMediaProps) => {
  const [mainImg, setMainImg] = useState<string>(product.media[0])

  return (
    <div className={`flexCol ${style} gap-4`}>
      <div className="flexCenter w-full">
        <div className={`flexCenter relative ${imgDimension}`}>
          <Image
            src={mainImg}
            alt={product.title}
            fill
            className="rounded-xl object-contain"
          />
        </div>
      </div>
      <div
        className={`${product.media.length > 3 ? "flexBetween" : "flexCenter"} w-full gap-4 overflow-x-auto pb-4`}
      >
        {product.media.map((img) => (
          <div
            key={img}
            className={`flexCenter p-1 ${mainImg === img && "border border-black"} relative flex-shrink-0 rounded-xl ${smallImgDimension}`}
          >
            <Image
              src={img}
              alt={product.title}
              fill
              className="rounded-xl object-cover"
              onMouseEnter={() => setMainImg(img)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductMedia
