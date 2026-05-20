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
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 bg-black/50 z-40" />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[380px] bg-white z-50 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-5 border-b">
          <h2 className="font-bold text-xl">Cart</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="p-5 overflow-y-auto h-[calc(100%-180px)]">
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-3 mb-3">
                <img src={item.image} className="w-14 h-14 object-cover" />

                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p>${item.price}</p>

                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500"
                >
                  remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-5 border-t">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="w-full mt-4 bg-black text-white py-3 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default CartDrawer;
