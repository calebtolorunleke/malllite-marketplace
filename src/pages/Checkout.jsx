import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  // ================= TOTAL CALCULATION =================
  const subtotal = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  const shipping = subtotal > 0 ? 0 : 0; // free shipping (you can upgrade later)
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  // ================= PLACE ORDER =================
  const handlePlaceOrder = () => {
    alert("🎉 Order placed successfully!");

    setCart([]);
    navigate("/");
  };

  // ================= EMPTY CART STATE =================
  if (!cart.length) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Your Cart is Empty
        </h1>

        <p className="text-gray-500 mt-3">
          You need to add items before proceeding to checkout.
        </p>

        <button
          onClick={() => navigate("/products")}
          className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  // ================= MAIN UI =================
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

      {/* LEFT: CART ITEMS */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Checkout
        </h1>

        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name || item.title}
                className="w-16 h-16 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h2 className="font-semibold text-gray-800">
                  {item.name || item.title}
                </h2>

                <p className="text-sm text-gray-500">
                  Qty: {item.quantity}
                </p>
              </div>

              <p className="font-bold text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: SUMMARY */}
      <div className="bg-white p-6 rounded-2xl shadow-lg h-fit">

        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Order Summary
        </h2>

        <div className="space-y-3 text-sm text-gray-600">

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="flex justify-between">
            <span>Tax (5%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        <div className="border-t mt-6 pt-4 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        {/* ACTION BUTTONS */}
        <button
          onClick={handlePlaceOrder}
          className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Place Order
        </button>

        <button
          onClick={() => navigate("/products")}
          className="w-full mt-3 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Checkout;