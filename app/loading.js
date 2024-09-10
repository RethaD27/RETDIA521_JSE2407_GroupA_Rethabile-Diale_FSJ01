export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-gray-200"></div>
      <p className="mt-4 text-gray-700 text-lg font-medium">Loading...</p>
    </div>
  );
}
