
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const products = [
  {
    id: 1,
    name: "Nike Air Force 1",
    price: 120,
    category: "Shoes",
    rating: 4.8,
    reviews: 124,
    description:
      "The Nike Air Force 1 combines classic streetwear style, everyday comfort, and durable materials.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900",
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=900",
    ],
  },
  {
    id: 2,
    name: "Oversized Hoodie",
    price: 45,
    category: "Men",
    rating: 4.6,
    reviews: 86,
    description:
      "A comfortable everyday hoodie with a relaxed fit and versatile style.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=900",
    ],
  },
  {
    id: 3,
    name: "Classic Watch",
    price: 80,
    category: "Accessories",
    rating: 4.7,
    reviews: 92,
    description:
      "A timeless accessory designed to complement your everyday outfits.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=900",
    ],
  },
];

const colors = [
  { name: "White", value: "#ffffff" },
  { name: "Black", value: "#171717" },
  { name: "Gray", value: "#a3a3a3" },
];

const sizes = ["7", "8", "9", "10", "11"];

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product =
    products.find((item) => item.id === Number(id)) || products[0];

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState("White");
  const [selectedSize, setSelectedSize] = useState("9");
  const [openSection, setOpenSection] = useState("Product Details");
  const [added, setAdded] = useState(false);

  const [wishlist, setWishlist] = useState(false);

  const addProduct = () => {
    dispatch(
      addToCart({
        ...product,
        image: selectedImage,
        color: selectedColor,
        size: selectedSize,
        cartId: `${product.id}-${selectedColor}-${selectedSize}`,
        quantity: 1,
      })
    );

    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  const accordionSections = [
    {
      title: "Product Details",
      content: product.description,
    },
    {
      title: "Specifications",
      content: `Category: ${product.category}. Available colors: White, Black, and Gray.`,
    },
    {
      title: "Shipping & Return",
      content:
        "Shipping costs are calculated at checkout. Returns are subject to the store's return policy.",
    },
  ];

  return (
    <main className="mx-auto max-w-[1200px] px-5 py-8">
      <div className="mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-black">Home</Link>
        {" / "}
        <Link to="/products" className="hover:text-black">Shop</Link>
        {" / "}
        <span className="text-gray-900">{product.name}</span>
      </div>

      <section className="grid gap-8 lg:grid-cols-2">
        {/* Image gallery */}
        <div className="grid gap-4 sm:grid-cols-[76px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col">
            {product.images.map((image, index) => (
              <button
                key={image}
                onClick={() => setSelectedImage(image)}
                className={`h-16 w-16 shrink-0 overflow-hidden rounded-md border ${
                  selectedImage === image
                    ? "border-black"
                    : "border-gray-200"
                }`}
                aria-label={`View product image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="order-1 flex min-h-[360px] items-center justify-center rounded-lg bg-gray-100 sm:order-2 sm:min-h-[500px]">
            <img
              src={selectedImage}
              alt={product.name}
              className="h-full max-h-[500px] w-full rounded-lg object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* Product information */}
        <div className="py-2">
          <p className="text-sm text-gray-500">{product.category}</p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-2 text-sm">
            <span className="text-amber-500">
              {"★".repeat(5)}
            </span>
            <span className="text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="mt-5 text-2xl font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            {product.description}
          </p>

          {/* Colors */}
          <div className="mt-6">
            <p className="mb-3 text-sm font-semibold text-gray-900">
              Color: <span className="font-normal">{selectedColor}</span>
            </p>

            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  title={color.name}
                  aria-label={color.name}
                  className={`h-8 w-8 rounded-full border-2 ${
                    selectedColor === color.name
                      ? "border-black ring-2 ring-gray-300 ring-offset-2"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-6">
            <p className="mb-3 text-sm font-semibold text-gray-900">
              Size: {selectedSize}
            </p>

            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-10 min-w-10 rounded-md border px-3 text-sm ${
                    selectedSize === size
                      ? "border-black bg-gray-900 text-white"
                      : "border-gray-200 hover:border-gray-900"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <button
            onClick={addProduct}
            className="mt-8 w-full rounded-md bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            {added ? "✓ Added to Cart" : "🛒 Add to Cart"}
          </button>

          <button
            onClick={() => setWishlist((previous) => !previous)}
            className="mt-3 w-full rounded-md border border-gray-200 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            {wishlist ? "♥ Added to Wishlist" : "♡ Add to Wishlist"}
          </button>

          {/* Store benefits */}
          <div className="mt-8 grid grid-cols-3 gap-3 border-y border-gray-200 py-5 text-center">
            <div>
              <p className="text-lg">♧</p>
              <p className="mt-1 text-xs font-semibold">Free Shipping</p>
              <p className="mt-1 text-[11px] text-gray-500">
                On orders over $50
              </p>
            </div>
            <div>
              <p className="text-lg">↺</p>
              <p className="mt-1 text-xs font-semibold">7 Days Return</p>
              <p className="mt-1 text-[11px] text-gray-500">
                Easy return policy
              </p>
            </div>
            <div>
              <p className="text-lg">⬡</p>
              <p className="mt-1 text-xs font-semibold">Secure Payment</p>
              <p className="mt-1 text-[11px] text-gray-500">
                100% secure
              </p>
            </div>
          </div>

          {/* Accordions */}
          <div className="mt-4 divide-y divide-gray-200">
            {accordionSections.map((section) => (
              <div key={section.title}>
                <button
                  onClick={() =>
                    setOpenSection((current) =>
                      current === section.title ? "" : section.title
                    )
                  }
                  className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-gray-900"
                >
                  {section.title}
                  <span>
                    {openSection === section.title ? "−" : "+"}
                  </span>
                </button>

                {openSection === section.title && (
                  <p className="pb-4 text-sm leading-6 text-gray-600">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
