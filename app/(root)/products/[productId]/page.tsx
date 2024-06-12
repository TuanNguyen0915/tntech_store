
import RelativeProducts from "@/components/shared/RelativeProducts"
import ProductDetails from "@/components/shared/products/productDetails/ProductDetails"
import { getProductById } from "@/lib/actions"

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await getProductById(params.productId)

  return (
    <div className="lg:mt-[10rem] mt-10 w-full">
      {!product ? (
        <p>Product not found</p>
      ) : (
        <div className="w-full flexCol gap-10">
          <ProductDetails product={product} />
          <RelativeProducts product={product}/>
        </div>

      )}
    </div>
  )
}

export default ProductPage
export const dynamic = "force-dynamic"
