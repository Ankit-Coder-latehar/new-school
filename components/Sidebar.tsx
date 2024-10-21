import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaUserFriends, FaUserAlt, FaBullhorn, FaBell, FaExclamationCircle } from "react-icons/fa";
import { MdOutlineClass } from "react-icons/md";
import { GrUserPolice } from "react-icons/gr";
import { BsFillHouseDoorFill } from "react-icons/bs";

const StudentSidebar = () => {
  return (
    <div className="h-screen w-16 bg-gray-100 flex flex-col items-center py-4 space-y-4">
      {/* User Image */}
      <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center">
        {/* Placeholder for user image */}
      </div>
      <hr />

      {/* Navigation Icons */}
      <div className="flex-grow space-y-2">
        <a href="/student" className="text-blue-500 p-1">
          <FaUserGraduate className="h-4 w-4" />
        </a>
        <a href="/class" className="hover:text-blue-500 text-black p-1">
          <MdOutlineClass className="h-4 w-4" />
        </a>
        <a href="/teacher" className="hover:text-blue-500 text-black p-1">
          <FaChalkboardTeacher className="h-4 w-4" /> 
        </a>
        <a href="/parent" className="hover:text-blue-500 text-black p-1">
          <FaUserFriends className="h-4 w-4" />
        </a>
        <a href="/driver" className="hover:text-blue-500 text-black p-1">
          <GrUserPolice className="h-4 w-4" />
        </a>
        <a href="/helper" className="hover:text-blue-500 text-black p-1">
          <FaUserAlt className="h-4 w-4" />
        </a>
        <a href="/holidays" className="hover:text-blue-500 text-black p-1">
          <BsFillHouseDoorFill className="h-4 w-4" />
        </a>
        <a href="/announcements" className="hover:text-blue-500 text-black p-1">
          <FaBullhorn className="h-4 w-4" />
        </a>
        <a href="/reminder" className="hover:text-blue-500 text-black p-1">
          <FaBell className="h-4 w-4" />
        </a>
        <a href="/notice" className="hover:text-blue-500 text-black p-1">
          <FaExclamationCircle className="h-4 w-4" />
        </a>
      </div>

      {/* Logout Icon */}
      <div className="mt-auto mb-2">
        <div className="text-red-600">
          <img src="/material-symbols_logout.png" alt="Logout" className="h-8 w-8" /> {/* Logout icon */}
        </div>
      </div>
    </div>
  );
};

export default StudentSidebar;
