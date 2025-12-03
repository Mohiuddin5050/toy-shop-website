import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-purple-50 min-h-screen py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-6">
          About SKToyShop
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We bring joy to kids through high-quality, safe, and creative toys.
          Our mission is to make childhood more colorful, fun, and imaginative.
        </p>

        {/* Image + Text Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <img
            src="https://i.ibb.co.com/VW34QkZ3/15f23fceef79e4a3d82b8504b26cc858.jpg"
            alt="toy-store"
            className="rounded-xl shadow-lg w-full object-cover"
          />

          <div>
            <h3 className="text-3xl font-semibold text-purple-700 mb-4">
              Who We Are
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              At SKToyShop, toys are not just items — they are memories,
              happiness, and learning tools for every child. Our toy collection
              is carefully selected to maintain safety, durability, and fun.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              From colorful building blocks to soft teddy bears and exciting
              remote-control cars — we provide a wide range of toys for all ages.
              Our mission is to deliver quality and customer satisfaction.
            </p>

           
          </div>
        </div>

        {/* Mission Cards */}
        <h3 className="text-3xl font-bold text-center text-purple-700 mt-20 mb-10">
          Our Mission & Values
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border">
            <h4 className="text-xl font-semibold text-purple-700 mb-2">Safety First</h4>
            <p className="text-gray-600">
              Every toy is tested and verified to ensure safe play for all children.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border">
            <h4 className="text-xl font-semibold text-purple-700 mb-2">Creativity</h4>
            <p className="text-gray-600">
              Our toys inspire imagination, creativity, and learning every day.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border">
            <h4 className="text-xl font-semibold text-purple-700 mb-2">Customer Trust</h4>
            <p className="text-gray-600">
              We value our customers and ensure a smooth, joyful shopping experience.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
