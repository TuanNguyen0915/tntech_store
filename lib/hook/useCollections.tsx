import { create } from "zustand"
import { ICollection } from "../types"

interface ICollectionsStore {
  collectionsStore: ICollection[]
  setCollectionsStore: (collections: ICollection[]) => void
}

export const useCollectionsStore = create<ICollectionsStore>((set) => ({
  collectionsStore: [],
  setCollectionsStore: (collections) => set({ collectionsStore: collections }),
  
}))
