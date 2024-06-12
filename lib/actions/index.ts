"use server"
export const getAllCollections = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections`)
  const data = await res.json()
  return data.collections
}

export const getAllProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  const data = await res.json()
  return data.products
}

export const getProductById = async (productId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`,
  )
  const data = await res.json()
  return data.product
}

export const getCollectionById = async (collectionId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionId}`,
  )
  const data = await res.json()
  return data.collection
}

export const getOrdersByCustomerId = async (customerId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/customer/${customerId}`,
  )
  const data = await res.json()
  return data.orders
}
