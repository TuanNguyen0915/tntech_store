export const getCurrentUser = async () => {
  const res = await fetch(`/api/users/`)
  const data = await res.json()
  return data
}

export const getWishList = async (productId: string) => {
  const res = await fetch("/api/users/wishlist", {
    method: "POST",
    body: JSON.stringify({ productId }),
  })
  const data = await res.json()
  return data
}
