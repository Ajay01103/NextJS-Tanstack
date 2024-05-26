"use server"

export type Products = {
  id: number
  title: string
  description: string
}

export async function getProducts() {
  const res = await fetch("http://127.0.0.1:8787/products")
  const products = await res.json()

  return products
}
