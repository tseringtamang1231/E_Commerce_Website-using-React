import React from 'react'
import { Container, ItemCard } from '../components'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
  {
    tag: "New collection",
    title: "Upgrade your style today",
    text: "Discover the latest trends in fashion. Quality products, better prices.",
    button: "Shop now",
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1400&q=80",
  },
  {
    tag: "Footwear",
    title: "Step into something new",
    text: "Clean classics and everyday sneakers, made to last.",
    button: "Shop shoes",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&q=80",
  },
  {
    tag: "Accessories",
    title: "Finish the look",
    text: "Watches, caps and bags that go with everything.",
    button: "Shop accessories",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&q=80",
  },
];

const products = [
  { id: 1, name: "Nike Air Force 1", price: 120, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
  { id: 2, name: "Oversized Hoodie", price: 45, img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80" },
  { id: 3, name: "Casio Watch", price: 60, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" },
  { id: 4, name: "Baseball Cap", price: 25, img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80" },
];

const categories = [
  { name: "Men", img: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&q=80" },
  { name: "Women", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80" },
  { name: "Accessories", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80" },
  { name: "Shoes", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80" },
];

function Home() {
  return (
    <Container>
      <main className="mx-auto w-full max-w-[1200px] px-5">

        {/* Hero slider (Swiper) */}
        <div className="mt-6 overflow-hidden rounded-xl bg-gray-100">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            loop
            style={{
              '--swiper-navigation-color': '#111827',
              '--swiper-navigation-size': '24px',
              '--swiper-pagination-color': '#111827',
              '--swiper-pagination-bullet-inactive-color': '#111827',
              '--swiper-pagination-bullet-inactive-opacity': '0.3',
            }}
          >
            {slides.map((s) => (
              <SwiperSlide key={s.title}>
                <div className="relative flex min-h-[380px] items-center">
                  <img src={s.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
                  <div className="relative z-10 max-w-xl px-8 py-10 md:px-16">
                    <small className="text-sm text-gray-500">{s.tag}</small>
                    <h1 className="mt-1 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
                      {s.title}
                    </h1>
                    <p className="mb-6 mt-3 max-w-sm text-gray-700">{s.text}</p>
                    <Link
                      to="/products"
                      className="inline-block rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-700"
                    >
                      {s.button}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Featured products */}
        <section className="pt-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-lg font-bold">Featured products</h2>
            <Link to="/products" className="text-sm text-gray-500 hover:text-gray-900">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.map((p) => (
              <ItemCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* Shop by category */}
        <section className="pt-12">
          <h2 className="mb-4 text-lg font-bold">Shop by category</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.name}
                to={`/products`}
                  state={{ category: c.name }}
                className="group text-center"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="mt-2.5 block text-sm font-medium">{c.name}</span>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </Container>
  )
}

export default Home