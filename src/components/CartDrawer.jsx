function CartDrawer({ isOpen, onClose, cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <>
      {/* BACKDROP */}
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 bg-black/50 z-40" />
      )}

      {/* DRAWER */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full sm:w-[380px]
          bg-white z-50 shadow-2xl
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-4 border-b">
          <h2 className="font-bold text-lg sm:text-xl">Your Cart</h2>

          <button
            onClick={onClose}
            className="text-xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-sm">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 sm:gap-4 border-b pb-4 mb-4"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  className="w-16 h-16 sm:w-14 sm:h-14 object-cover rounded-md"
                />

                {/* INFO */}
                <div className="flex-1">
                  <p className="font-semibold text-sm sm:text-base line-clamp-1">
                    {item.name}
                  </p>

                  <p className="text-sm text-gray-600">${item.price}</p>

                  {/* QTY CONTROLS */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-8 h-8 flex items-center justify-center border rounded-md active:scale-95"
                    >
                      -
                    </button>

                    <span className="text-sm font-medium">{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-8 h-8 flex items-center justify-center border rounded-md active:scale-95"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xs sm:text-sm text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        <div className="border-t p-4 sm:p-5 bg-white">
          <div className="flex justify-between font-bold mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 active:scale-[0.98] transition">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default CartDrawer;
