import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, ItemCard } from '../components'

function Favourite() {
  const items = useSelector((state) => state.whitelist.items)

  return (
    <Container>
      <main className="mx-auto w-full max-w-[1200px] px-5 py-8">
        <h1 className="mb-6 text-xl font-bold">My Wishlist ({items.length})</h1>

        {items.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {items.map((p) => (
              <ItemCard key={p.id} {...p} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-gray-500">Your wishlist is empty.</p>
            <Link to="/products" className="mt-3 inline-block text-sm underline">
              Browse products
            </Link>
          </div>
        )}
      </main>
    </Container>
  )
}

export default Favourite