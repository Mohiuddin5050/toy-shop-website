import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaStar,
  FaHeart,
  FaShareAlt,
  FaTag,
  FaBox,
  FaTruck,
  FaShieldAlt,
  FaArrowLeft,
} from "react-icons/fa";
import Loading from "./Loading";
import { motion } from "framer-motion";

const ToyDetails = () => {
  const { toyId } = useParams();
  const [toy, setToy] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedToy = data.find((item) => item.toyId === parseInt(toyId));
        setToy(selectedToy);
        // Set initial image
        if (selectedToy?.pictureURL) {
          setSelectedImage(selectedToy.pictureURL);
        }
      });
  }, [toyId]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: toy.toyName,
        text: `Check out this amazing toy: ${toy.toyName}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.info("🔗 Link copied to clipboard!", {
        position: "bottom-center",
        autoClose: 2000,
      });
    }
  };

  if (!toy) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
        >
          <FaArrowLeft />
          <span className="font-medium">Back to Shop</span>
        </Link>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div>
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl overflow-hidden shadow-2xl mb-6">
                <img
                  src={selectedImage}
                  alt={toy.toyName}
                  className="w-full h-[400px] object-contain p-8"
                />

                {/* Image Badges */}
                <div className="absolute top-4 left-4">
                  {toy.availableQuantity < 10 && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      Almost Gone!
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-3 rounded-full backdrop-blur-sm transition-all ${
                      isLiked
                        ? "bg-red-500/20 text-red-500"
                        : "bg-white/80 text-gray-600 hover:bg-white"
                    }`}
                  >
                    <FaHeart className={isLiked ? "fill-current" : ""} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-3 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white transition-all"
                  >
                    <FaShareAlt />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full font-medium text-sm flex items-center gap-2">
                    <FaTag />
                    {toy.subCategory}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      toy.availableQuantity > 20
                        ? "bg-green-100 text-green-700"
                        : toy.availableQuantity > 10
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {toy.availableQuantity > 20
                      ? "In Stock"
                      : toy.availableQuantity > 10
                      ? "Low Stock"
                      : "Limited Stock"}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {toy.toyName}
                </h1>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-xl ${
                          i < Math.round(toy.rating)
                            ? "text-yellow-500 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-lg font-semibold text-gray-700">
                      {toy.rating.toFixed(1)}
                    </span>
                    <span className="text-gray-500 ml-1">
                      ({Math.floor(Math.random() * 500) + 100} reviews)
                    </span>
                  </div>
                </div>

                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                  ${toy.price.toFixed(2)}
                </p>
                <p className="text-gray-500 text-sm">
                  Free shipping on orders over $50
                </p>
              </div>

              {/* Description */}
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {toy.description ||
                    "This premium toy is designed to inspire creativity and provide endless hours of fun. Made with safe, non-toxic materials and featuring vibrant colors that capture children's attention."}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-white rounded-lg">
                    <FaShieldAlt className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Safe Materials
                    </p>
                    <p className="text-sm text-gray-600">
                      Non-toxic & child-safe
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-white rounded-lg">
                    <FaTruck className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Fast Delivery</p>
                    <p className="text-sm text-gray-600">1-3 business days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-white rounded-lg">
                    <FaBox className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Easy Returns</p>
                    <p className="text-sm text-gray-600">30-day guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ToyDetails;
