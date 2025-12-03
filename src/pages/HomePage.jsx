import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import CustomerReviews from "./CustomerReviews";
import Offers from "./Offers";
import { AuthContext } from "../provider/AuthProvider";
import useTitle from "../hooks/useTitle";
import Loading from "./Loading";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useTitle("Home");
  const [toys, setToys] = useState([]);
  const { loading, setLoading } = useContext(AuthContext);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => setToys(data));
    setLoading(false);
  }, [setLoading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mb-10">
      <div className="relative w-full py-6 md:py-10">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="carousel w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm bg-gradient-to-br from-white/10 to-white/5">
          {/* Slide 1 - Premium Baby Toys */}
          <div id="slide1" className="carousel-item relative w-full group">
            <div className="relative w-full h-[60vh] min-h-[500px] max-h-[800px]">
              {/* Gradient Background Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-blue-400/20"></div>

              {/* Main Image with Parallax Effect */}
              <img
                src="https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Premium Baby Toys"
              />

              {/* Animated floating elements */}
              <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-300"></div>

              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

              {/* Text Content with Animation */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <div className="max-w-4xl">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
                    <span className="text-2xl">🧸</span>
                    <span className="font-semibold">Featured Collection</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                      Premium Baby Toys
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
                    Soft, safe & colorful toys that spark imagination
                  </p>

                  {/* CTA Button */}
                  {/* <button className="group/btn px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/30">
              <span className="flex items-center gap-3">
                Explore Collection
                <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
              </span>
            </button> */}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {[1, 2, 3, 4].map((dot) => (
                <a
                  key={dot}
                  href={`#slide${dot}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    dot === 1 ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                  }`}
                ></a>
              ))}
            </div>
          </div>

          {/* Slide 2 - Educational Toys */}
          <div id="slide2" className="carousel-item relative w-full group">
            <div className="relative w-full h-[60vh] min-h-[500px] max-h-[800px]">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-orange-500/20 to-yellow-400/20"></div>

              <img
                src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Educational Toys"
              />

              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 2.5%)`,
                    backgroundSize: "50px 50px",
                  }}
                ></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

              <div className="absolute inset-0 flex items-center px-12">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
                    <span className="text-2xl">🧩</span>
                    <span className="font-semibold">Learning Through Play</span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                      Smart Learning
                    </span>
                    <br />
                    <span className="text-white">Toys</span>
                  </h1>

                  <p className="text-xl text-gray-200 mb-8">
                    Develop cognitive skills with our educational toy collection
                  </p>

                  {/* <div className="flex gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300">
                Shop Now
              </button>
              <button className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300">
                Learn More
              </button>
            </div> */}
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {[1, 2, 3, 4].map((dot) => (
                <a
                  key={dot}
                  href={`#slide${dot}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    dot === 2 ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                  }`}
                ></a>
              ))}
            </div>
          </div>

          {/* Slide 3 - Outdoor Fun */}
          <div id="slide3" className="carousel-item relative w-full group">
            <div className="relative w-full h-[60vh] min-h-[500px] max-h-[800px]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-teal-500/20 to-cyan-400/20"></div>

              <img
                src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Outdoor Toys"
              />

              {/* Animated bubbles */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full animate-bounce"></div>
              <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full animate-bounce delay-200"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
                <div className="max-w-3xl text-center">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
                    <span className="text-2xl">🚀</span>
                    <span className="font-semibold">Adventure Awaits</span>
                  </div>

                  <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
                    <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                      Outdoor
                    </span>
                    <br />
                    <span className="text-white">Adventure</span>
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl">
                    Unleash creativity with our outdoor & sports toys collection
                  </p>

                  {/* <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
                Explore Outdoor Toys
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white/40 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Summer Collection
              </button>
            </div> */}
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {[1, 2, 3, 4].map((dot) => (
                <a
                  key={dot}
                  href={`#slide${dot}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    dot === 3 ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                  }`}
                ></a>
              ))}
            </div>
          </div>

          {/* Slide 4 - Creative Arts */}
          <div id="slide4" className="carousel-item relative w-full group">
            <div className="relative w-full h-[60vh] min-h-[500px] max-h-[800px]">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 via-purple-500/20 to-violet-400/20"></div>

              <img
                src="https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Creative Arts Toys"
              />

              {/* Geometric shapes */}
              <div className="absolute top-20 right-20 w-32 h-32 border-4 border-purple-400/30 rotate-45 animate-spin-slow"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-pink-400/30 rounded-full animate-ping"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

              <div className="absolute inset-0 flex items-end justify-end px-12 pb-12">
                <div className="max-w-lg text-right">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30 ml-auto">
                    <span className="text-2xl">🎨</span>
                    <span className="font-semibold">Creative Play</span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-violet-300 bg-clip-text text-transparent">
                      Artistic
                    </span>
                    <br />
                    <span className="text-white">Expression</span>
                  </h1>

                  <p className="text-xl text-gray-200 mb-8">
                    Inspire creativity with our art & craft toy collection
                  </p>

                  {/* <button className="group/art px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full font-bold text-lg hover:from-fuchsia-600 hover:to-purple-700 transition-all duration-300 overflow-hidden relative">
              <span className="relative z-10 flex items-center gap-3">
                Discover Art Toys
                <span className="group-hover/art:rotate-90 transition-transform">✏️</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover/art:translate-x-full transition-transform duration-500"></div>
            </button> */}
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {[1, 2, 3, 4].map((dot) => (
                <a
                  key={dot}
                  href={`#slide${dot}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    dot === 4 ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                  }`}
                ></a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Modern Design */}
        {/* <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 hidden md:flex justify-between pointer-events-none">
    <div className="pointer-events-auto">
      {[4, 1, 2, 3].map((prevSlide, idx) => (
        <a
          key={idx}
          href={`#slide${prevSlide}`}
          className="btn btn-circle bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group/arrow"
        >
          <span className="group-hover/arrow:-translate-x-1 transition-transform">←</span>
        </a>
      ))}
    </div>
    <div className="pointer-events-auto">
      {[2, 3, 4, 1].map((nextSlide, idx) => (
        <a
          key={idx}
          href={`#slide${nextSlide}`}
          className="btn btn-circle bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group/arrow"
        >
          <span className="group-hover/arrow:translate-x-1 transition-transform">→</span>
        </a>
      ))}
    </div>
  </div> */}

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
    <div className="flex items-center gap-2 text-white/60 text-sm">
      <span className="animate-bounce">↓</span>
      <span>Scroll to explore</span>
      <span className="animate-bounce">↓</span>
    </div>
  </div> */}
      </div>

      <div>
        <section className="bg-pink-50 mb-5 pb-10">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6 pt-5">
            Popular Toys
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toys.slice(0, 8).map((toy) => (
              <div
                key={toy.toyId}
                className="card bg-base-100 shadow-md border border-gray-100 hover:shadow-xl transition-all"
              >
                <figure>
                  <img
                    src={toy.pictureURL}
                    alt={toy.toyName}
                    className="h-60 w-full object-cover p-5"
                    data-aos="zoom-in"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{toy.toyName}</h2>
                  <p className="text-gray-600 text-sm">
                    Seller:{" "}
                    <span className="font-medium">{toy.sellerName}</span>
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
