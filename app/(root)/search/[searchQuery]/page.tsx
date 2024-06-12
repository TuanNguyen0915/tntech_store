"use client"
import Container from "@/components/shared/Container"
import ProductCard from "@/components/shared/products/ProductCard"
import { useProductsStore } from "@/lib/hook/useProducts"

const SearchPage = ({ params }: { params: { searchQuery: string } }) => {
  const { productsStore } = useProductsStore()
  const decodeQuery = decodeURIComponent(params.searchQuery)
  const filteredProducts = productsStore.filter((product) => {
    return (
      product.title.toLowerCase().includes(params.searchQuery.toLowerCase()) ||
      product.description
        .toLowerCase()
        .includes(params.searchQuery.toLowerCase())
    )
  })
  return (
    <Container>
      <div className="flexCol w-full gap-4">
        <h1 className="heading2">
          Search results for{" "}
          <span className="cursor-pointer text-blue-500 transition-all hover:brightness-125">
            {decodeQuery}
          </span>
        </h1>
        <div className="flexBetween flex-wrap gap-4 lg:gap-10">
          {filteredProducts.length === 0 ? (
            <p>No products</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </Container>
  )
}

export default SearchPage
export const dynamic = "force-dynamic"
