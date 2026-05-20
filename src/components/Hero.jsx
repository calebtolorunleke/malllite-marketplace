import { useNavigate } from "react-router-dom";

function Hero({ addToCart }) {
  const navigate = useNavigate();

  const featuredProduct = {
    id: "featured-1",
    name: "Nike Air Max",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "fashion",
    rating: 4.5,
  };

  const goToProducts = () => {
    navigate("/products");
  };

  const scrollToProducts = () => {
    const el = document.getElementById("products");

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/products");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#111827] to-black text-white overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-yellow-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="z-10 text-center lg:text-left">
          <p className="uppercase tracking-[0.25em] text-yellow-400 text-xs md:text-sm font-semibold mb-5">
            MallLite Marketplace
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Shop Smarter.
            <span className="block text-yellow-400">Live Better.</span>
          </h1>

          <p className="mt-6 md:mt-8 text-gray-300 text-base md:text-lg leading-7 md:leading-8 max-w-xl mx-auto lg:mx-0">
            Discover trending gadgets, fashion, electronics, and premium essentials — all in one modern shopping experience inspired by world-class marketplaces.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <button
              onClick={goToProducts}
              className="bg-yellow-400 text-black px-6 py-4 rounded-2xl font-bold hover:scale-105 hover:bg-yellow-300 transition shadow-lg"
            >
              Start Shopping
            </button>

            <button
              onClick={scrollToProducts}
              className="border border-white/20 px-6 py-4 rounded-2xl hover:bg-white hover:text-black transition"
            >
              Explore Deals
            </button>

          </div>

          {/* STATS */}
          <div className="mt-10 md:mt-14 flex justify-center lg:justify-start gap-8 md:gap-10 flex-wrap text-center lg:text-left">

            <div>
              <h2 className="text-2xl md:text-3xl font-bold">10K+</h2>
              <p className="text-gray-400 text-xs md:text-sm">Active Users</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold">500+</h2>
              <p className="text-gray-400 text-xs md:text-sm">Products</p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold">24/7</h2>
              <p className="text-gray-400 text-xs md:text-sm">Support</p>
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-center">

          <div className="relative w-full max-w-sm md:max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 md:p-6 shadow-2xl transition">

            <img
              src={featuredProduct.image}
              alt={featuredProduct.name}
              className="rounded-2xl object-cover h-64 sm:h-72 md:h-[400px] w-full"
            />

            <div className="mt-5 md:mt-6">

              <p className="text-xs md:text-sm text-yellow-400 uppercase">
                Featured Product
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-2">
                {featuredProduct.name}
              </h3>

              <div className="flex items-center justify-between mt-4">

                <p className="text-2xl md:text-3xl font-black">
                  ${featuredProduct.price}
                </p>

                <button
                  onClick={() => addToCart?.(featuredProduct)}
                  className="bg-yellow-400 text-black px-4 py-2 md:px-5 md:py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
                >
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