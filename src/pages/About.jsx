
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../components";

function About() {
  return (
    <Container>
      <main className="mx-auto max-w-[1200px] px-5 py-10">

        {/* Hero Section */}
        <section className="grid items-center gap-8 rounded-xl bg-gray-100 p-6 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm text-gray-500">ABOUT SHOPZONE</p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              Style for Every Day
            </h1>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Welcome to ShopZone, your destination for modern clothing,
              stylish shoes, and everyday accessories. We bring fashion
              and comfort together to help you find your own style.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-block rounded-md bg-gray-900 px-6 py-3 text-sm text-white hover:bg-gray-700"
            >
              Explore Products
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80"
            alt="Fashion store"
            className="h-64 w-full rounded-lg object-cover md:h-80"
          />
        </section>

        {/* Why ShopZone */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Why ShopZone?
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900">
                Quality Products
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                We focus on products that combine style, comfort,
                and quality for your everyday needs.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900">
                Affordable Prices
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Discover fashionable clothing, shoes, and accessories
                at prices that suit your budget.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900">
                Easy Shopping
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Find your favorite styles in one place and enjoy
                a simple and convenient shopping experience.
              </p>
            </div>

          </div>
        </section>

      </main>
    </Container>
  );
}

export default About;
