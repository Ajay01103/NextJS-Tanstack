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
