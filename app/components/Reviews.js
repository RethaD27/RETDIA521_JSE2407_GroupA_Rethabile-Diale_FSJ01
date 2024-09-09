export default function Reviews({ reviews }) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Customer Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg text-gray-800">{review.reviewerName}</span>
              <span className="text-sm text-gray-600">{new Date(review.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="text-yellow-400 mr-2">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <span className="text-gray-600">{review.rating} / 5</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}