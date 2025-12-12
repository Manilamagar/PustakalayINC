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
        </div>
      </div>

      {/* Books Management Section */}
      <div className="bg-gray-100 py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Books Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Books</h3>
              <p className="text-gray-600">Comprehensive book catalog with detailed information.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Barcode</h3>
              <p className="text-gray-600">Barcode scanning for quick book identification and tracking.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Spine</h3>
              <p className="text-gray-600">Spine labeling system for organized shelf arrangement.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Book Issued/Return Section */}
      <div className="container mx-auto mt-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Book Issued/Return</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Manual Issued/Return</h3>
            <p className="text-gray-600">Manual book issuing and return process for staff handling.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Auto Issued/Return</h3>
            <p className="text-gray-600">Automated issuing and return using barcode scanning.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Student/Staff</h3>
            <p className="text-gray-600">Separate management for student and staff book transactions.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-red-600">Reservation & Fines</h3>
            <p className="text-gray-600">Book reservation system and automated fine calculation.</p>
          </div>
        </div>
      </div>

      {/* Report Section */}
      <div className="bg-gray-100 py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Generate Reports</h3>
              <p className="text-gray-600">Comprehensive reporting on book circulation, fines, and usage statistics.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Download Reports</h3>
              <p className="text-gray-600">Export reports in various formats for analysis and record keeping.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Setup Section */}
      <div className="container mx-auto mt-12 px-4 pb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Setup & Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Settings</h3>
            <p className="text-gray-600">Configure system settings, user roles, and library policies.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Faculty-wise Books</h3>
            <p className="text-gray-600">Organize and manage books by faculty and department.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Update/Edit Books</h3>
            <p className="text-gray-600">Add, update, and edit book information in the catalog.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-red-600">Import Books</h3>
            <p className="text-gray-600">Bulk import book data from external sources.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;