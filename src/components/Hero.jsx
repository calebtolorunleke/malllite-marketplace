function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="z-10">
          <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm font-semibold mb-5">
            MallLite Marketplace
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Shop Smarter.
            <span className="block text-yellow-400">Live Better.</span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">
            Discover trending gadgets, fashion, electronics, and premium
            essentials — all in one modern shopping experience inspired by the
            world’s biggest marketplaces.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 hover:bg-yellow-300 transition duration-300 shadow-xl">
              Start Shopping
            </button>

            <button className="border border-gray-600 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition duration-300">
              Explore Deals
            </button>
          </div>

          {/* STATS */}
          <div className="mt-14 flex gap-10 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold">10K+</h2>
              <p className="text-gray-400 text-sm">Active Users</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-gray-400 text-sm">Premium Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">24/7</h2>
              <p className="text-gray-400 text-sm">Customer Support</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center items-center">
          {/* MAIN CARD */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl w-full max-w-md">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Product"
              className="rounded-2xl object-cover h-[400px] w-full"
            />

            <div className="mt-6">
              <p className="text-sm text-yellow-400 uppercase">
                Featured Product
              </p>

              <h3 className="text-2xl font-bold mt-2">Nike Air Max</h3>

              <div className="flex items-center justify-between mt-4">
                <p className="text-3xl font-black">$129</p>

                <button className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
