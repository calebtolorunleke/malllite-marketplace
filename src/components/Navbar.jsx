function Navbar({ search, setSearch, cartCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-50 bg-[#0b1220] border-b border-white/10 text-white backdrop-blur-md shadow-lg">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        {/* LOGO */}
        <div className="text-2xl font-black tracking-wide text-yellow-400 cursor-pointer">
          MallLite
        </div>

        {/* SEARCH BAR */}
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
        <div className="flex items-center gap-4">

          {/* MOBILE SEARCH ICON (optional upgrade) */}
          <button className="md:hidden text-xl">
            🔍
          </button>

          {/* CART BUTTON */}
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            🛒 Cart

            {/* BADGE */}
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