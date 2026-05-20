import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import CategorySidebar from "./components/CategorySidebar";
import Footer from "./components/Footer";
import { fetchProducts } from "./api/products";

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [category, setCategory] = useState("all");

  // products state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🛒 Add to cart logic (with quantity support)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // 🧮 Cart count
  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // 📦 Fetch products from API
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);

        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.log("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* NAVBAR */}
      <Navbar
        search={search}
        setSearch={setSearch}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* HERO */}
      <Hero />

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto flex gap-6 px-4 py-10 flex-1">

        {/* SIDEBAR */}
        <CategorySidebar
          category={category}
          setCategory={setCategory}
        />

        {/* PRODUCTS */}
        <ProductGrid
          products={products}
          search={search}
          addToCart={addToCart}
          category={category}
          loading={loading}
        />

      </div>

      {/* CART DRAWER (OVERLAY UI) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        setCart={setCart}
      />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;