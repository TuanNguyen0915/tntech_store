"use client"
import { useState } from "react"
import { IProduct } from "@/lib/types"
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import ProductMedia from "./ProductMedia"
import { Button } from "@/components/ui/button"
import ProductWishList from "../../ProductWishList"
import useCart from "@/lib/hook/useCart"

const QualityItems = ({
  quantity,
  setQuantity,
}: {
  quantity: number
  setQuantity: (quantity: number) => void
}) => {
  return (
    <div className="w-full">
      <p className="text-gray-400">Quality:</p>
      <div className="flex w-full items-center gap-4">
        <button
          onClick={() => setQuantity(quantity - 1)}
          type="button"
          disabled={quantity <= 1}
          className="disabled:cursor-not-allowed disabled:opacity-60"
        >
          <FaMinusCircle size={24} />
        </button>
        <p className="text-xl font-semibold">{quantity}</p>
        <button type="button" onClick={() => setQuantity(quantity + 1)}>
          <FaPlusCircle size={24} className="cursor-pointer" />
        </button>
      </div>
    </div>
  )
}

interface IProductInfoProps {
  product: IProduct
}

const ProductInfo = ({ product }: IProductInfoProps) => {
  const [pickedColor, setPickedColor] = useState<string | null>(
    product.colors[0],
  )
  const [pickedSize, setPickedSize] = useState<string | null>(product.sizes[0])
  const [quantity, setQuantity] = useState<number>(1)
  const cart = useCart()
  return (
    <div className="w-full space-y-4 md:w-1/2">
      <div className="flexBetween gap-4">
        <h1 className="flex-1 text-2xl font-semibold tracking-wide  ">
          {product.title}
        </h1>
        <ProductWishList productId={product._id} />
      </div>
      <p className=" text-gray-400">
        Category:{" "}
        <span className="font-semibold text-black">{product.category}</span>
      </p>
      <p className="productPrice">${product.price}</p>
      <div className="w-full md:max-w-[700px]">
        <p className="text-gray-400">Description:</p>
        <p>{product.description}</p>
      </div>
      {/* COLOR */}
      {product.colors.length > 0 && (
        <div className="w-full">
          <p className="text-gray-400">Color:</p>
          <div className="flex w-full items-center gap-4">
            {product.colors.map((color) => (
              <div
                key={color}
                className={`${pickedColor === color && "bg-black text-white"} flexCenter h-[40px] w-[80px] cursor-pointer rounded-lg border border-black`}
                onClick={() => setPickedColor(color)}
              >
                <p>{color}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* SIZE */}
      {product.colors.length > 0 && (
        <div className="w-full">
          <p className="text-gray-400">Sizes:</p>
          <div className="flex w-full items-center gap-4">
            {product.sizes.map((size: string) => (
              <div
                key={size}
                className={`${size === pickedSize && "bg-black text-white"} flexCenter h-[40px] w-[80px] cursor-pointer rounded-lg border border-black`}
                onClick={() => setPickedSize(size)}
              >
                <p>{size}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* QUANTITY */}
      <QualityItems quantity={quantity} setQuantity={setQuantity} />
      {/* MEDIA WITH MOBILE VIEW */}
      <ProductMedia
        product={product}
        style="w-full md:hidden"
        imgDimension="w-[350px] h-[350px]"
        smallImgDimension="w-[80px] h-[80px]"
      />
      {/* ADD TO CART */}
      <Button
        variant={"outline"}
        className="w-full lg:w-1/2 border-black"
        onClick={() =>
          cart.addItem({
            item: product,
            size: pickedSize as string,
            color: pickedColor as string,
            quantity,
          })
        }
      >
        Add To Cart
      </Button>
    </div>
  )
}

export default ProductInfo
