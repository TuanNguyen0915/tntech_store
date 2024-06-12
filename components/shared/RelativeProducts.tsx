"use client"
import { useProductsStore } from "@/lib/hook/useProducts"
import { IProduct } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

interface IRelativeProductsProps {
  product: IProduct
}

const RelativeProducts = ({ product }: IRelativeProductsProps) => {
  const { productsStore } = useProductsStore()
  let relativeProducts = productsStore.filter(
    (p) =>
      p.category.toLowerCase() === product.category.toLowerCase() ||
      p.tags.some((p) => product.tags.includes(p)) ||
      p.tags.some((p) => product.description.includes(p)) ||
      p.title.split(" ").some((p) => product.title.split(" ").includes(p)),
  )
  relativeProducts = relativeProducts.filter((p) => p._id !== product._id)
  return (
    <div className="w-full space-y-24">
      {relativeProducts.length > 0 && (
        <div className="flexCol mt-20 gap-4">
          <h1 className="heading2">Similar Products</h1>
          <div className="flexBetween w-full flex-wrap gap-4">
            {relativeProducts.map((product) => (
              <Link
                href={`/products/${product._id}`}
                key={product._id}
                className="flexCol flex flex-1 gap-2"
              >
                <Image
                  src={product.media[0]}
                  alt={product.title}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
                <h1 className="text-lg">
                  {product.title.length > 20
                    ? `${product.title.slice(0, 20)}...`
                    : product.title}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default RelativeProducts
