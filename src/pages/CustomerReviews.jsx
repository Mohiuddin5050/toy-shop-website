import React from 'react';

const CustomerReviews = () => {
    
        const reviews = [
    {
      id: 1,
      name: "Md Mahmud",
      comment: "Amazing quality toys! My son loved the car set.",
      rating: 5,
      photo: "https://i.ibb.co/PS0tf8r/334293579-762764334998946-468804940005338477-n.jpg"
    },
    {
      id: 2,
      name: "Sabbir Khan",
      comment: "Fast delivery and beautiful packaging. Highly recommended!",
      rating: 4,
      photo: "https://i.ibb.co/tpgGwF7B/556089303-779573858020115-554024854635828120-n.jpg"
    },
    {
      id: 3,
      name: "Amina Akter",
      comment: "Loved the variety of educational toys available here!",
      rating: 5,
      photo: "https://i.ibb.co/9k4754rq/272801597-104388965506031-8598903033390602351-n.jpg"
    }
  ];

  return (
    <section className="bg-pink-50 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-8">Happy Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-md rounded-2xl p-6 border border-pink-100 hover:shadow-pink-200 transition"
            >
              <img
                src={review.photo}
                alt={review.name}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <p className="text-gray-500 mt-2 italic">"{review.comment}"</p>
              <p className="text-yellow-500 mt-2">⭐ {review.rating}/5</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
    
};

export default CustomerReviews;