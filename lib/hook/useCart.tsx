import { create } from "zustand"
import { toast } from "react-hot-toast"
import { persist, createJSONStorage } from "zustand/middleware"
import { ICartItem } from "../types"

export interface ICartStore {
  cartItems: ICartItem[]
  addItem: (item: ICartItem) => void
  removeItem: (idToRemove: string, size?: string, color?: string) => void
  increaseQuantity: (
    idToIncrease: string,
    size?: string,
    color?: string,
  ) => void
  decreaseQuantity: (
    idToDecrease: string,
    size?: string,
    color?: string,
  ) => void
  clearCart: () => void
}

const useCart = create(
  persist<ICartStore>(
    (set, get) => ({
      cartItems: [],
      // ADD ITEM TO CART
      addItem: (data: ICartItem) => {
        const { item, quantity, color, size } = data
        const currentItems = get().cartItems
        const existingItem = currentItems.find(
          (cartItem) =>
            cartItem.item._id === item._id &&
            cartItem.color === color &&
            cartItem.size === size &&
            cartItem.quantity === quantity,
        )
        if (existingItem) {
          return toast("Item already in cart")
        }
        set({ cartItems: [...currentItems, data] })
        toast("Item added to cart")
      },
      // REMOVE ITEM FROM CART
      removeItem: (idToRemove: string, size?: string, color?: string) => {
        const newItems = get().cartItems.filter(
          (cartItem) => {
            if ( cartItem.item._id === idToRemove && cartItem.size === size && cartItem.color === color) {
              return false
            }
            return true
          },
        )
        set({ cartItems: newItems })
        toast.success("Item removed from cart")
      },
      // INCREASE QUANTITY
      increaseQuantity: (
        idToIncrease: string,
        size?: string,
        color?: string,
      ) => {
        const newItems = get().cartItems.map((i) =>
          i.item._id === idToIncrease && i.size === size && i.color === color
            ? { ...i, quantity: (i.quantity += 1) }
            : i,
        )
        set({ cartItems: newItems })
        toast.success("Item quantity increased")
      },
      // DECREASE QUANTITY
      decreaseQuantity: (
        idToDecrease: string,
        size?: string,
        color?: string,
      ) => {
        let newItems = get().cartItems.map((i) =>
          i.item._id === idToDecrease && i.size === size && i.color === color
            ? { ...i, quantity: (i.quantity -= 1) }
            : i,
        )
        // if quantity is 0 remove from cart
        newItems = newItems.filter((i) => i.quantity > 0)
        set({ cartItems: newItems })
        toast.success("Item quantity decreased")
      },
      // CLEAR CART (DELETE CART)
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
export default useCart
