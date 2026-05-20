import { useParams, useNavigate } from "react-router-dom";

function ProductDetail({ products = [], addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // safer matching (string-safe)
  const product = products.find((p) => String(p.id) === String(id));

  if (!products.length) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-500">
        Product not found
        <div className="mt-4">
          <button
            onClick={() => navigate("/products")}
            className="text-black underline"
          >
            Go back to products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-600 hover:text-black transition"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* IMAGE */}
        <div className="bg-gray-100 flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-72 md:h-96 object-contain hover:scale-105 transition duration-300"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/300x300?text=No+Image";
            }}
          />
        </div>

        {/* DETAILS */}
        <div className="p-6 md:p-10">

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {product.title}
          </h1>

          <p className="text-gray-500 mt-2 capitalize">
            {product.category}
          </p>

          <p className="text-3xl font-black mt-5">
            ${product.price}
          </p>

          <p className="text-yellow-500 mt-2">
            ⭐ {product.rating?.rate || "4.0"}
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {product.description || "No description available for this product."}
          </p>

          {/* ACTIONS */}
          <div className="mt-8 flex flex-col gap-3">

            <button
              onClick={() => addToCart(product)}
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition active:scale-95"
            >
              Add to Cart
            </button>

            <button
              onClick={() => navigate("/products")}
              className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Continue Shopping
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDetail;