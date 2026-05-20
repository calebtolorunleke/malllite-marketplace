import { useParams, useNavigate } from "react-router-dom";

function ProductDetail({ products, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-600 hover:text-black"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow">

        {/* IMAGE */}
        <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        {/* DETAILS */}
        <div>

          <h1 className="text-2xl font-bold text-gray-900">
            {product.title}
          </h1>

          <p className="text-gray-500 mt-2 capitalize">
            {product.category}
          </p>

          <p className="text-3xl font-bold mt-4">
            ${product.price}
          </p>

          <p className="text-yellow-500 mt-2">
            ⭐ {product.rating?.rate || "4.0"}
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {product.description || "No description available."}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductDetail;