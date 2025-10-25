import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaStar } from 'react-icons/fa';
import CustomerReviews from './CustomerReviews';
import Offers from './Offers';
import { AuthContext } from '../provider/AuthProvider';
import useTitle from '../hooks/useTitle';
import Loading from './Loading';
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
useTitle("Home")
  const [toys, setToys,] = useState([]);
  const {loading, setLoading}=useContext(AuthContext);
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  useEffect(() => {
    setLoading(true)
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => setToys(data));
      setLoading(false);
  }, [setLoading]);

  if (loading) {
    return <Loading />; 
  }

  return (
    <div className='mb-10'>
      <div className="carousel w-full py-5">
        <div id="slide1" className="carousel-item relative w-full h-96 object-cover" data-aos="fade-up">
          <img
            src={"https://i.ibb.co/F44pPvpm/a9ch-k0ta-170624.jpg"}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-96 object-cover" data-aos="fade-up">
          <img
            src={"https://i.ibb.co/q3bkhPLf/many-colorful-toys-collection-on-the-desk-generative-ai-photo.jpg"}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-96 object-cover" data-aos="fade-up">
          <img
            src={"https://i.ibb.co/Pv2nt3pC/0ce27aaca629ac2ca2defeba51efe8e2.jpg"}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-96 object-cover" data-aos="fade-up">
          <img
            src={"https://i.ibb.co/SX0dYczd/slider2.jpg"}
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div>
        <section className='bg-pink-50 mb-5 pb-10'>
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6 pt-5">
            Popular Toys
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toys.map((toy) => (
              <div
                key={toy.toyId}
                className="card bg-base-100 shadow-md border border-gray-100 hover:shadow-xl transition-all"
              >
                <figure>
                  <img
                    src={toy.pictureURL}
                    alt={toy.toyName}
                    className="h-72 w-full object-cover p-5" data-aos="zoom-in"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{toy.toyName}</h2>
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
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <CustomerReviews />
        <Offers />
      </div>
    </div>
  );
};

export default HomePage;