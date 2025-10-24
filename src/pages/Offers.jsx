import React from 'react';

const Offers = () => {
  const offers = [
    {
      id: 1,
      name: "Robot Toy",
      discount: "25% OFF",
      image: "https://i.ibb.co/43NW52W/51-On-FOQz86-L.jpg"
    },
    {
      id: 2,
      name: "Lego Building Set",
      discount: "15% OFF",
      image: "https://i.ibb.co/7dct7Wx9/9ff12cd353b83f66a531101665236a6f-jpg-720x720q80.jpg"
    },
    {
      id: 3,
      name: "Teddy Bear",
      discount: "20% OFF",
      image: "https://i.ibb.co/4HgkmZw/643fee48880ea6367565a963-muiteiur-giant-teddy-bear-stuffed-animal.jpg"
    }
  ];

  return (
    <section className="bg-yellow-50 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-600 mb-8">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4"
            >
              <img
                src={offer.image}
                alt={offer.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                {offer.name}
              </h3>
              <p className="text-pink-500 font-bold text-lg mt-2">
                {offer.discount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;