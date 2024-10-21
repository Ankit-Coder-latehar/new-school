import React from 'react';
import { FaPen, FaTrash, FaPaperclip } from 'react-icons/fa';

const Table = () => {
  const data = [
    {
      photo: "/Ellipse 112.png", // Replace with actual photo URLs
      name: "Ravi Dubey",
      admissionNo: "20EE093",
      className: "9th-C",
      guardian: "Mr Manish Dubey",
      guardianContact: "9852365896",
      dob: "25/08/2024",
      address: "Ramgarh, Sector 50, Gurgaon, Haryana",
      dobFull: "05/02/2008"
    },
    {
      photo: "/Ellipse 112 (1).png", // Replace with actual photo URLs
      name: "Ravi Dubey",
      admissionNo: "20EE093",
      className: "9th-C",
      guardian: "Mr Manish Dubey",
      guardianContact: "9852365896",
      dob: "25/08/2024",
      address: "Ramgarh, Sector 50, Gurgaon, Haryana",
      dobFull: "05/02/2008"
    },
    // More student data here...
  ];

  return (
    <div className="container mx-auto p-4 w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal hidden md:table-row">
              <th className="py-3 px-6 text-center">Photo</th>
              <th className="py-3 px-6 text-center">Name</th>
              <th className="py-3 px-6 text-center">Admission No.</th>
              <th className="py-3 px-6 text-center">Class</th>
              <th className="py-3 px-6 text-center">Guardian Name</th>
              <th className="py-3 px-6 text-center">DOB</th>
              <th className="py-3 px-6 text-center">Address</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <tr className="border-b border-gray-200 hover:bg-gray-100 hidden md:table-row">
                  <td className="py-3 px-6 text-center">
                    <img src={item.photo} alt={item.name} className="w-10 h-10 rounded-full mx-auto" />
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div>{item.name}</div>
                    <div className="text-xs text-gray-500">{item.dobFull}</div>
                  </td>
                  <td className="py-3 px-6 text-center">{item.admissionNo}</td>
                  <td className="py-3 px-6 text-center text-blue-500 font-semibold">{item.className}</td>
                  <td className="py-3 px-6 text-center">
                    <div>{item.guardian}</div>
                    <div className="text-xs text-blue-500">{item.guardianContact}</div>
                  </td>
                  <td className="py-3 px-6 text-center">{item.dob}</td>
                  <td className="py-3 px-6 text-center">{item.address}</td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex justify-center space-x-2">
                      <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-md p-2">
                        <FaPaperclip />
                      </button>
                      <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-md p-2">
                        <FaPen />
                      </button>
                      <button className="text-white bg-red-500 hover:bg-red-600 rounded-md p-2">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Mobile View */}
                <tr className="md:hidden border-b border-gray-200 hover:bg-gray-100">
                  <td colSpan="8" className="py-3 px-6 text-left">
                    <div className="flex items-center space-x-4">
                      <img src={item.photo} alt={item.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-xs text-gray-500">DOB: {item.dobFull}</div>
                        <div className="text-xs text-gray-500">Adm No: {item.admissionNo}</div>
                        <div className="text-xs text-gray-500">Class: {item.className}</div>
                        <div className="text-xs text-gray-500">Guardian: {item.guardian}</div>
                        <div className="text-xs text-gray-500">Contact: {item.guardianContact}</div>
                        <div className="text-xs text-gray-500">DOB: {item.dob}</div>
                        <div className="text-xs text-gray-500">Address: {item.address}</div>
                        <div className="mt-2 flex space-x-2">
                          <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-md p-2">
                            <FaPaperclip />
                          </button>
                          <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-md p-2">
                            <FaPen />
                          </button>
                          <button className="text-white bg-red-500 hover:bg-red-600 rounded-md p-2">
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
