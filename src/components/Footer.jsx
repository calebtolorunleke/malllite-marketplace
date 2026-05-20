import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleCartClick = () => {
    // fallback behavior since cart is not a route page
    const event = new CustomEvent("open-cart");
    window.dispatchEvent(event);
  };

  const goHome = () => {
    navigate("/");

    // scroll to top after route change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goShopping = () => {
    navigate("/products");

    // scroll to top after route change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-[#0b1220] text-gray-300 mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* BRAND */}
        <div>
          <h2
            onClick={goHome}
            className="text-2xl font-black text-yellow-400 tracking-wide cursor-pointer"
          >
            MallLite
          </h2>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            A modern marketplace experience built with React & Tailwind.
            Designed for speed, simplicity, and scalable ecommerce UI.
          </p>

          <div className="mt-5 text-xs text-gray-500">
            Fully Online Platform
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                onClick={goHome}
                className="hover:text-yellow-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link 
                onClick={goShopping}
                className="hover:text-yellow-400 transition"
              >
                Shop
              </Link>
            </li>

            <li>
              <Link onClick={goShopping} className="hover:text-yellow-400 transition">
                Categories
              </Link>
            </li>

            <li>
              <button
                onClick={handleCartClick}
                className="hover:text-yellow-400 transition"
              >
                Cart
              </button>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Contact</h3>

          <p className="text-sm text-gray-400">support@malllite.com</p>

          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            Need help? This project is actively evolving into a full ecommerce
            system with cart, filters, and API integration.
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-5 text-center text-xs sm:text-sm text-gray-500">
        <span
          className="hover:text-gray-300 transition cursor-pointer"
          onClick={() => navigate("/")}
        >
          © {new Date().getFullYear()} MallLite
        </span>{" "}
        • CA
      </div>
    </footer>
  );
}

export default Footer;
