function CategorySidebar({ category, setCategory }) {
  const categories = [
    "all",
    "electronics",
    "fashion",
    "gaming",
    "home",
    "beauty",
  ];

  return (
    <aside
      className="
        w-full md:w-64
        bg-white rounded-xl shadow
        p-4
        h-fit
        md:sticky md:top-20
      "
    >
      {/* TITLE */}
      <h2 className="font-bold text-lg mb-3">Categories</h2>

      {/* SCROLL ON MOBILE */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`
              px-4 py-2 rounded-full md:rounded-lg
              text-sm font-medium whitespace-nowrap
              transition active:scale-95

              ${
                category === cat
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }
            `}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default CategorySidebar;
