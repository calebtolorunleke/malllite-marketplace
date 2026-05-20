import { useState, useEffect, useMemo } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import CategorySidebar from "./components/CategorySidebar";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";

import { fetchProducts } from "./api/products";

function App() {
  // ================= STATE =================
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [category, setCategory] = useState("all");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // ================= CART LOGIC =================
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  // ================= FETCH PRODUCTS =================
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // ================= FILTER PRODUCTS =================
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (!product) return false;

      const matchesSearch = (product.title ?? "")
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  // ================= PAGINATION =================
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / itemsPerPage)
  );

  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredProducts, currentPage]);

  // ================= RESET PAGE ON FILTER CHANGE =================
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  // ================= UI =================
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

      {/* MAIN LAYOUT */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4 py-10 flex-1">

        {/* SIDEBAR */}
        <div className="w-full md:w-64">
          <CategorySidebar
            category={category}
            setCategory={setCategory}
          />
        </div>

        {/* PRODUCTS */}
        <div className="flex-1">

          {error ? (
            <div className="text-red-500 text-center py-10">
              {error}
            </div>
          ) : (
            <>
              <ProductGrid
                products={paginatedProducts}
                search={search}
                addToCart={addToCart}
                category={category}
                loading={loading}
              />

              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            </>
          )}

        </div>
      </div>

      {/* CART DRAWER */}
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