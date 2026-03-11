export default function SkeletonCard() {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full" />
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-1/3" />
        </div>
      </div>
    </div>
  );
}