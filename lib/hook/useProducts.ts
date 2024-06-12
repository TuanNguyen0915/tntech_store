import { create } from "zustand"
import { IProduct } from "../types"

interface IProductsStore {
  productsStore: IProduct[]
  setProductsStore: (products: IProduct[]) => void
}

export const useProductsStore = create<IProductsStore>((set) => ({
  productsStore: [],
  setProductsStore: (products) => set({ productsStore: products }),
}))
