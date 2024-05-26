import { Products, getProducts } from "@/actions/products"

export default async function Home() {
  const products = await getProducts()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      APP
      {products.map((product: Products) => (
        <p>{product.title}</p>
      ))}
    </main>
  )
}
