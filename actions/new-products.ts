import axios from "axios"

export type Products = {
  id: number
  title: string
  rating: number
  category: string
  price: number
}

export async function getProducts() {
  const res = await axios.get<Promise<Products[]>>("http://127.0.0.1:8787/products")
  const products = await res.data

  return products
}

export const getProductsById = async (id: number) => {
  const res = await axios.get(`http://127.0.0.1:8787/products/${id}`)
  const productId = await res.data

  return productId
}
