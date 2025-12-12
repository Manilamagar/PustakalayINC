import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white py-20 px-6 text-center overflow-hidden rounded-b-3xl shadow-lg">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-400/30 rounded-full animate-pulse"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to <span className="text-yellow-300">INC Pustakalay</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-md">
          College Library Management System for BCA, BSW, BHM, and +2 Programs
        </p>
      </div>

      {/* Facilities Section */}
      <div className="container mx-auto mt-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">BCA</h3>
            <p className="text-gray-600">Bachelor of Computer Applications resources and study materials.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-600">BSW</h3>
            <p className="text-gray-600">Bachelor of Social Work library resources and research materials.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">BHM</h3>
            <p className="text-gray-600">Bachelor of Hotel Management books and industry references.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-red-600">+2</h3>
            <p className="text-gray-600">Higher Secondary Education materials and textbooks.</p>
          </div>

export default Home;