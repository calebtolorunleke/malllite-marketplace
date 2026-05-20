import { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail({ products = [], addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => String(p.id) === String(id));

  const [activeImage, setActiveImage] = useState(0);

  // fallback images (since many APIs return single image)
  const images = useMemo(() => {
    if (!product) return [];
    return product.images?.length
      ? product.images
      : [
          product.image,
          product.image,
          product.image,
        ];
  }, [product]);

  // related products (same category, exclude current)
  const related = useMemo(() => {
    if (!product) return [];

    return products
      .filter(
        (p) =>
          p.category === product.category &&
          String(p.id) !== String(product.id)
      )
      .slice(0, 4);
  }, [products, product]);

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-500">
        Product not found
        <div className="mt-4">
          <button
            onClick={() => navigate("/")}
            className="text-black underline"
          >
            Go back home
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
        className="mb-6 text-sm text-gray-600 hover:text-black"
      >
        ← Back
      </button>

      {/* MAIN PRODUCT */}
      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow">

        {/* IMAGE GALLERY */}
        <div>
          <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center">
            <img
              src={images[activeImage]}
              alt={product.title}
              className="h-80 object-contain transition"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setActiveImage(index)}
                className={`h-16 w-16 object-cover rounded-lg cursor-pointer border-2 transition ${
                  activeImage === index
                    ? "border-black"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
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
            ⭐ {product.rating?.rate || product.rating || "4.0"}
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

      {/* RELATED PRODUCTS */}
      <div className="mt-16">
        <h2 className="text-xl font-bold mb-6">Related Products</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {related.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={item.image}
                className="h-32 w-full object-contain"
              />

              <p className="mt-2 text-sm font-semibold line-clamp-2">
                {item.title}
              </p>

              <p className="font-bold mt-1">${item.price}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ProductDetail;