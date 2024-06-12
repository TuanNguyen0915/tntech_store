export interface ICollection {
  _id: string
  title: string
  description: string
  image: string
  products: IProduct[]
  createdAt: Date
  updatedAt: Date
}

export interface IProduct {
  _id: string
  title: string
  description: string
  media: string[]
  category: string
  collections: ICollection[]
  tags: string[]
  sizes: string[]
  colors: string[]
  price: number
  expense: number
}

export interface IUser {
  clerkId: string
  wishList: string[]
}

export interface ICartItem {
  item: IProduct
  size?: string
  color?: string
  quantity: number
}

export interface ICollection {
  _id: string
  title: string
  description: string
  image: string
  products: IProduct[]
  createdAt: Date
  updatedAt: Date
}

export interface IOrder {
  _id: string
  customerClerkId: string
  products: {
    product: IProduct
    size?: string
    color?: string
    quantity: number
  }[]
  shippingAddress: {
    street: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  shippingRate: string
  totalAmount: number
  createdAt: Date
  updatedAt: Date
}
