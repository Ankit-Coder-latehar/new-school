import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { FaUserCircle } from 'react-icons/fa'; // User icon

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white py-4 px-8 shadow-md">
      {/* School Name */}
      <div className="text-2xl font-bold text-black">
        School Name
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-gray-500">
        <Link href="/" className="text-blue-600 border-b-2 border-blue-600">My School</Link>
        <Link href="/studentdashboard" className="hover:text-black">Dashboard</Link>
        <Link href="/Bus" className="hover:text-black">Buses</Link>
        <Link href="#" className="hover:text-black">Routes</Link>
        <Link href="#" className="hover:text-black">Reports</Link>
        <Link href="/Banner" className="hover:text-black">Banner</Link>
        <Link href="#" className="hover:text-black">Bills</Link>
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-2 text-blue-600">
        <FaUserCircle size={24} />
        <span>User Name</span>
      </div>
    </nav>
  );
};

export default Navbar;
