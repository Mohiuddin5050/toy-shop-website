import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AllItems = () => {
  const [toys, setToys] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const result = toys.filter((toy) =>
      toy.toyName.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div className="bg-purple-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-8">
          All Toys Collection
        </h2>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search toys..."
            value={search}
            onChange={handleSearch}
            className="input input-bordered w-full max-w-md shadow-sm focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((toy) => (
            <div
              key={toy.toyId}
              className="card bg-white shadow-md border border-gray-100 hover:shadow-xl transition-all rounded-xl"
            >
              <figure>
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="h-60 w-full object-cover p-4 rounded-lg"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-purple-700">{toy.toyName}</h2>

                <p className="text-gray-600 text-sm">
                  Seller: <span className="font-medium">{toy.sellerName}</span>
                </p>

                <p className="text-gray-600 text-sm">
                  Category: {toy.subCategory}
                </p>

                <p className="font-semibold text-purple-700">
                  ${toy.price.toFixed(2)}
                </p>

                <p className="text-sm text-gray-500">
                  Available: {toy.availableQuantity} pcs
                </p>

                <div className="flex items-center text-yellow-500 gap-1">
                  {[...Array(Math.round(toy.rating))].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    ({toy.rating})
                  </span>
                </div>

                <div className="card-actions justify-center mt-3">
                  <Link to={`/toy/${toy.toyId}`}>
                    <button className="btn btn-sm bg-purple-600 text-white hover:bg-purple-700">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-600 mt-10 text-lg">
            No toys found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllItems;
