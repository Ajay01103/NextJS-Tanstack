import { Products, getProducts } from "@/actions/new-products"
import React from "react"
import { DataTable } from "./_components/data-table"
import { Payment, columns } from "./_components/columns"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

const ProductsPage = async () => {
  const products = await getProducts()
  const data = await getData()
  return (
    <main className="flex flex-col items-center justify-center gap-y-10 w-full p-10">
      Products
      <div className="w-full">
        <DataTable
          columns={columns}
          data={products}
        />
      </div>
      {/* {products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))} */}
    </main>
  )
}

export default ProductsPage
