import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import StudentSidebar from '@/components/Sidebar'; // Adjust the path as necessary
import ClassControlPanel from '@/components/MiddleNavbar'; // Unused import, consider removing if not needed
import StudentHeader from '@/components/MiddleNavbar'; // Check if you need this import
import Table from '@/components/StudentTable'; // Adjust the path as necessary

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div>
        <StudentSidebar />
      </div>
      
      {/* Main content with Navbar */}
      <div className="flex-grow">
        <Navbar />
        <StudentHeader />
        
        {/* You can add more content here, such as the dashboard or other pages */}
        <div className="mt-[-10]">
          {/* Dashboard content goes here */}
          <Table />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

