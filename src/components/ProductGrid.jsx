import ProductSkeleton from "./ProductSkeleton";

function ProductGrid({ products = [], search, addToCart, category, loading }) {
  // 🧠 SAFE FILTERING (prevents crash)
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // ⏳ LOADING STATE (SKELETON UI)
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  // 📭 EMPTY STATE (IMPORTANT UX)
  if (filteredProducts.length === 0) {
    return (
      <div className="col-span-full text-center text-gray-500 mt-10">
        No products found 😕
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 group"
        >

          <img
            src={product.image}
            alt={product.title}
            className="h-40 mx-auto object-contain group-hover:scale-105 transition duration-300"
          />

          <h2 className="mt-3 font-semibold text-sm line-clamp-2">
            {product.title}
          </h2>

          <p className="font-bold mt-2 text-gray-900">
            ${product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  );
}

export default ProductGrid;