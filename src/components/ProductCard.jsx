function ProductCard({ product, addToCart }) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">

      {/* IMAGE */}
      <div className="h-48 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* INFO */}
      <div className="p-4">

        <h3 className="font-semibold text-gray-800 truncate">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 capitalize">
          {product.category}
        </p>

        {/* RATING */}
        <p className="text-yellow-500 text-sm mt-1">
          ⭐ {product.rating}
        </p>

        {/* PRICE */}
        <p className="text-lg font-bold mt-2">
          ${product.price}
        </p>

        {/* BUTTON */}
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;