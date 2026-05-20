import { useNavigate } from "react-router-dom";

function Navbar({ search, setSearch, cartCount, onCartClick }) {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");

    // scroll to top after route change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0b1220] border-b border-white/10 text-white backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4 gap-3">
        {/* LOGO (NOW CLICKABLE → HOME) */}
        <div
          onClick={goHome}
          className="text-xl md:text-2xl font-black tracking-wide text-yellow-400 cursor-pointer active:scale-95 transition"
        >
          MallLite
        </div>

        {/* DESKTOP SEARCH */}
        <div className="hidden md:flex flex-1 mx-6">
          <div className="flex w-full max-w-2xl bg-white/10 border border-white/10 rounded-full overflow-hidden">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, brands, categories..."
              className="w-full px-5 py-3 bg-transparent text-white placeholder-gray-300 outline-none"
            />

            <button className="bg-yellow-400 text-black px-6 font-semibold hover:bg-yellow-300 transition">
              Search
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* MOBILE SEARCH BUTTON */}
          <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition active:scale-95">
            🔍
          </button>

          {/* CART */}
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition active:scale-95"
          >
            <span className="text-sm md:text-base">🛒</span>
            <span className="hidden sm:inline text-sm">Cart</span>

            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
