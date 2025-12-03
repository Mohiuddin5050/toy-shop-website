import React from "react";
import Navbar from "../component/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../component/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Navbar (works everywhere) */}
      <Navbar />

      {/* Main dynamic pages */}
      <div className="flex-1 container mx-auto px-4">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
