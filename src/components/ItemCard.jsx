import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Favourite } from '../store/whitelistSlice'

function ItemCard({ id, name, price, img, className = '' }) {
  const dispatch = useDispatch()

  const liked = useSelector((state) => state.whitelist.items.some((p) => p.id === id)
  )

  const handleHeart = (e) => {
    e.preventDefault()    // capital D
    e.stopPropagation()
    dispatch(Favourite({ id, name, price, img }))
  }

  return (
   <Link to={`/product/${id}`} className={className}>
      <article>
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img src={img} alt={name} className="h-full w-full object-cover" />
          <button
            onClick={handleHeart}
            aria-label="Add to wishlist"
            className="absolute right-2.5 top-2.5 h-8 w-8 cursor-pointer rounded-full bg-white/90"
          >
            {liked ? "❤️" : "🤍"}
          </button>
        </div>
        <h3 className="mt-2.5 text-sm font-medium">{name}</h3>
        <p className="font-bold">${price}</p>
        <p className="text-xs text-yellow-500">★★★★☆</p>
      </article>
    </Link>
  )
}

export default ItemCard