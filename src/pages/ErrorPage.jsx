import React from 'react';
import errorImage from "../assets/error-404.png"
import { Link } from 'react-router';
import useTitle from '../hooks/useTitle';

const ErrorPage = () => {
    useTitle("404 Not Found")
    return (
        <div className="text-center py-20">
        <img className='mx-auto' src={errorImage} alt="" />
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-2 text-gray-600">Page not found. Try returning home.</p>
      <Link to="/" className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded">Go Home</Link>
    </div>
    );
};

export default ErrorPage;