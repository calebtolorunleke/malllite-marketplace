function Footer() {
  return (
    <footer className="bg-[#0b1220] text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-yellow-400">MallLite</h2>
          <p className="mt-3 text-sm text-gray-400">
            A modern marketplace experience built with React & Tailwind.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">Categories</li>
            <li className="hover:text-white cursor-pointer">Cart</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Contact</h3>
          <p className="text-sm">support@malllite.com</p>
          <p className="text-sm mt-2">Built for learning & portfolio use</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MallLite. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;