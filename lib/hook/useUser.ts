import { create } from "zustand"
import { IUser } from "../types"

interface IUserStore {
  currentUser: IUser | null
  setCurrentUser: (currentUser: IUser) => void
}

export const useUserStore = create<IUserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (currentUser: IUser) => set({ currentUser }),
}))
