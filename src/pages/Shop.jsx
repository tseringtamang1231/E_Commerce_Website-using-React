import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Container, ItemCard } from '../components'

const categories = ["All", "Men", "Women", "Accessories", "Shoes"]

const products = [
  { id: 1, name: "Nike Air Force 1", price: 120, category: "Shoes", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
  { id: 2, name: "Oversized Hoodie", price: 45, category: "Men", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80" },
  { id: 3, name: "Casio Watch", price: 60, category: "Accessories", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" },
  { id: 4, name: "Baseball Cap", price: 25, category: "Accessories", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80" },
  { id: 5, name: "White Sneakers", price: 90, category: "Shoes", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80" },
  { id: 6, name: "Black Jeans", price: 40, category: "Men", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80" },
  { id: 7, name: "Summer Dress", price: 55, category: "Women", img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80" },
  { id: 8, name: "Denim Jacket", price: 80, category: "Women", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80" },
]

function Shop() {
  // The category sent from the Home card (or "All" if there is none)
  const location = useLocation()
  console.log(location);
  
  const [category, setCategory] = useState(location.state?.category || "All") //home page
  const search = location.state?.search || "" //search bar
  const [sort, setSort] = useState("newest")

  // filter
  let list = products.filter(
    (p) =>( category === "All" || p.category === category) && 
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  // sort (copy first so the original array isn't changed)
  if (sort === "low") list = [...list].sort((a, b) => a.price - b.price)
  if (sort === "high") list = [...list].sort((a, b) => b.price - a.price)

  return (
    <Container>
      <main className="mx-auto w-full max-w-[1200px] px-5 py-8">
        <div className="grid gap-8 md:grid-cols-[200px_1fr]">

          {/* Sidebar */}
          <aside>
            <h2 className="mb-3 text-sm font-bold">Categories</h2>
            <div className="space-y-2">
              {categories.map((c) => (
                <label
                  key={c}
                  className={`flex cursor-pointer items-center gap-2 text-sm ${
                    category === c ? "font-bold text-gray-900" : "text-gray-600"
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    checked={category === c}
                    onChange={() => setCategory(c)}
                    className="cursor-pointer accent-gray-900"
                  />
                  {c}
                </label>
              ))}
            </div>
          </aside>

          {/* Products */}
          <section>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h1 className="text-xl font-bold">All Products</h1>
                <p className="text-sm text-gray-500">
                  Showing {list.length} of {products.length} products
                </p>
              </div>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="cursor-pointer rounded-md border border-gray-200 px-3 py-2 text-sm"
              >
                <option value="newest">Newest first</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {list.map((p) => (
                <ItemCard key={p.id} {...p} />
              ))}
            </div>
          </section>

        </div>
      </main>
    </Container>
  )
}

export default Shop