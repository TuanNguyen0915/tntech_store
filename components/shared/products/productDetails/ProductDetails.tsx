

import { IProduct } from "@/lib/types"
import ProductMedia from "./ProductMedia"
import ProductInfo from "./ProductInfo"


interface IProductDetailsProps {
  product: IProduct
}

const ProductDetails = ({ product }: IProductDetailsProps) => {
  return (
    <div className="flex w-full justify-between gap-4 lg:gap-20">
      {/* MEDIA */}
      <ProductMedia
        product={product}
        style="w-1/2 max-md:hidden"
        imgDimension="w-[500px] h-[500px]"
        smallImgDimension="w-[120px] h-[120px]"
      />
      {/* INFO */}
      <ProductInfo product={product} />
    </div>
  )
}

export default ProductDetails
