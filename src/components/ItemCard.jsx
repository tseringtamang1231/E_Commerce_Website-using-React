import React from 'react'
import { Link } from 'react-router-dom'

function ItemCard({
    id,
    name,
    price,
    img,
    className,
    ...props
}) {
  return (
    <Link to={`/product/${id}`}>
        {id &&   <article key={id}>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img src={img} alt={name} className="h-full w-full object-cover" />
                  <button 
                    aria-label="Add to wishlist"
                    className="absolute right-2.5 top-2.5 h-8 w-8 rounded-full bg-white/90">
                    🤍
                  </button>
                </div>
                <h3 className="mt-2.5 text-sm font-medium">{name}</h3>
                <p className="font-bold">${price}</p>
                <p className="text-xs text-yellow-500">★★★★☆</p>
              </article>
              }        
    </Link>
  )
}

export default ItemCard
