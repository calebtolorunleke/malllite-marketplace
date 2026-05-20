function ProductSkeleton() {
  return (
    <div
      className="
      bg-white rounded-2xl
      shadow-sm border border-gray-100
      p-4 animate-pulse
    "
    >
      {/* IMAGE SKELETON */}
      <div className="h-40 sm:h-48 bg-gray-200 rounded-xl relative overflow-hidden">
        {/* shimmer overlay */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      {/* CATEGORY */}
      <div className="h-3 bg-gray-200 rounded mt-4 w-1/3" />

      {/* TITLE */}
      <div className="h-4 bg-gray-200 rounded mt-3 w-3/4" />

      {/* RATING */}
      <div className="h-3 bg-gray-200 rounded mt-2 w-1/2" />

      {/* PRICE */}
      <div className="h-5 bg-gray-200 rounded mt-3 w-1/3" />

      {/* BUTTON */}
      <div className="h-10 bg-gray-200 rounded-xl mt-4 w-full" />
    </div>
  );
}

export default ProductSkeleton;
