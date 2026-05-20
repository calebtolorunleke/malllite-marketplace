function ProductSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 animate-pulse">
      
      {/* image placeholder */}
      <div className="h-40 bg-gray-200 rounded-lg" />

      {/* title */}
      <div className="h-4 bg-gray-200 rounded mt-4 w-3/4" />

      {/* price */}
      <div className="h-4 bg-gray-200 rounded mt-2 w-1/2" />

      {/* button */}
      <div className="h-10 bg-gray-200 rounded mt-4 w-full" />

    </div>
  );
}

export default ProductSkeleton;