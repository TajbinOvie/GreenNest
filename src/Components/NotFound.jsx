import React from 'react';
import { Link } from 'react-router';
import { Leaf, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100 text-center px-6">
      <div className="flex items-center justify-center mb-6">
        <Leaf className="w-10 h-10 text-green-600 animate-pulse" />
      </div>

      <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
      <p className="text-xl text-green-800 mb-8">
        Oops! The page you’re looking for doesn’t seem to exist.
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-all shadow-md"
      >
        <Home className="w-5 h-5" />
        Back to Home
      </Link>

      <p className="mt-8 text-sm text-green-700/70">
        Maybe a leaf fell off the wrong branch 🌿
      </p>
    </div>
  );
};

export default NotFound;
