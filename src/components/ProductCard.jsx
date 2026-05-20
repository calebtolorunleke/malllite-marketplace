function ProductCard({ product, addToCart }) {
  return (
    <div className="
      group bg-white rounded-2xl
      shadow-sm hover:shadow-xl
      transition duration-300
      overflow-hidden
      border border-gray-100
      flex flex-col
    ">

      {/* IMAGE */}
      <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-100">

        <img
          src={product.image}
          alt={product.name}
          className="
            w-full h-full object-cover
            group-hover:scale-110
            transition duration-500
          "
        />

        {/* subtle overlay for premium feel */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
      </div>

      {/* INFO */}
      <div className="p-4 flex flex-col flex-1">

        {/* CATEGORY */}
        <p className="text-xs text-gray-400 uppercase tracking-wide">
          {product.category}
        </p>

        {/* TITLE */}
        <h3 className="font-semibold text-gray-800 mt-1 line-clamp-1">
          {product.name}
        </h3>

        {/* RATING */}
        <div className="flex items-center gap-1 mt-2 text-sm text-yellow-500">
          {"⭐".repeat(Math.round(product.rating || 4))}
          <span className="text-gray-500 ml-1">
            ({product.rating})
          </span>
        </div>

        {/* PRICE */}
        <div className="mt-3 flex items-end gap-2">
          <p className="text-xl font-bold text-gray-900">
            ${product.price}
          </p>

          {/* fake discount style for premium feel */}
          <p className="text-sm text-gray-400 line-through">
            ${(product.price * 1.2).toFixed(0)}
          </p>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => addToCart(product)}
          className="
            mt-4 w-full
            bg-black text-white
            py-2.5 rounded-xl
            hover:bg-gray-800
            active:scale-95
            transition
            text-sm font-semibold
          "
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;