"use client"
import { getAllProducts } from "@/lib/actions"
import Container from "../Container"
import { IProduct } from "@/lib/types"

import ProductCard from "./ProductCard"
import { useEffect, useState } from "react"
import { useProductsStore } from "@/lib/hook/useProducts"

const Products = () => {
  const {productsStore, setProductsStore} = useProductsStore()

  useEffect(() => {
    const fetchData = async () =>{
      const res = await getAllProducts()
      setProductsStore(res)
    }
    fetchData()
  }, [])
  return (
    <Container>
      <div className="flexCol w-full gap-4">
        <h1 className="heading1">Products</h1>
        <div className="flexBetween flex-wrap lg:gap-10 gap-4">
          {productsStore.length === 0 ? (
            <p>No products</p>
          ) : (
            productsStore.map((product: IProduct) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </Container>
  )
}

export default Products
