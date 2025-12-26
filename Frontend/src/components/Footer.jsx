import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">INC Pustakalay</h3>
            <p className="text-gray-300">
              College Library Management System for BCA, BSW, BHM, and +2 Programs
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Books</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Reservations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Reports</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">Email: library@inc.edu.np</p>
            <p className="text-gray-300">Phone: +977-1-1234567</p>
            <p className="text-gray-300">Address: Kathmandu, Nepal</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2023 INC Pustakalay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
