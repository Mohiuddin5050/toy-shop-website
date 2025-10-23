import React, { useEffect, useState } from 'react';
import slider1Img from '../assets/slider1.jpg'
import slider2Img from '../assets/slider2.jpg'
import slider3Img from '../assets/slider3.jpg'
import slider4Img from '../assets/slider4.jpg'
import { Link } from 'react-router';
import { FaStar } from 'react-icons/fa';

const HomePage = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("/toys.json")
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, []);

    return (
        <div className=''>
            <div className="carousel w-full py-5">
                <div id="slide1" className="carousel-item relative w-full h-96 object-cover">
                    <img
                        src={slider1Img}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-96 object-cover">
                    <img
                        src={slider2Img}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-96 object-cover">
                    <img
                        src={slider3Img}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-96 object-cover">
                    <img
                        src={slider4Img}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div>
                <section>
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
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
                  className="h-72 w-full object-cover p-5"
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
            </div>
        </div>
    );
};

export default HomePage;