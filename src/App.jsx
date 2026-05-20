import { useState, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import CategorySidebar from "./components/CategorySidebar";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import ProductDetail from "./pages/ProductDetail";

import { fetchProducts } from "./api/products";

function App() {
  // ================= STATE =================
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [category, setCategory] = useState("all");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // ================= CART =================
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

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  // ================= FETCH PRODUCTS =================
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // ================= FILTER =================
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

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  // ================= HOME =================
  const Home = () => (
    <>
      <Hero addToCart={addToCart} />

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4 py-10">
        <CategorySidebar
          category={category}
          setCategory={setCategory}
        />

        <div className="flex-1">
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
        </div>
      </div>
    </>
  );

  // ================= PRODUCTS PAGE =================
  const ProductsPage = () => (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4 py-10">
      <CategorySidebar
        category={category}
        setCategory={setCategory}
      />

      <div className="flex-1">
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
      </div>
    </div>
  );

  // ================= APP LAYOUT =================
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* NAVBAR (ALWAYS VISIBLE) */}
      <Navbar
        search={search}
        setSearch={setSearch}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              products={products}
              addToCart={addToCart}
            />
          }
        />
      </Routes>

      {/* CART DRAWER */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        setCart={setCart}
      />

      {/* FOOTER (ALWAYS VISIBLE) */}
      <Footer />
    </div>
  );
}

export default App;