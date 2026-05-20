import ProductSkeleton from "./ProductSkeleton";

function ProductGrid({
  products = [],
  search = "",
  addToCart,
  category = "all",
  loading,
}) {
  // ================= SAFE FILTERING =================
  const filteredProducts = products.filter((product) => {
    if (!product) return false;

    const title = product?.title ?? "";
    const productCategory = product?.category ?? "";

    const matchesSearch = title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || productCategory === category;

    return matchesSearch && matchesCategory;
  });

  // ================= LOADING STATE =================
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  // ================= EMPTY STATE =================
  if (!filteredProducts.length) {
    return (
      <div className="flex items-center justify-center py-20 text-gray-500 text-sm">
        No products found 😕
      </div>
    );
  }

  // ================= PRODUCT GRID =================
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => {
        const id = product?.id;
        const title = product?.title ?? "Untitled Product";
        const image = product?.image ?? "";
        const price = product?.price ?? 0;

        return (
          <div
            key={id}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden group"
          >
            {/* IMAGE */}
            <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={image}
                alt={title}
                className="h-full object-contain group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h2 className="font-semibold text-sm line-clamp-2 text-gray-800">
                {title}
              </h2>

              <p className="text-gray-500 text-xs mt-1 capitalize">
                {product?.category}
              </p>

              <p className="font-bold text-lg mt-2 text-gray-900">
                ${price}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductGrid;