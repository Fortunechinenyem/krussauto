import React, { useState } from "react";
import Sidebar from "@/components/userdashboard/Sidebar";
import Topnav from "@/components/userdashboard/Topnav";
import UserModal from "@/components/modals/UserModal";

const UserDashboardLayout = ({ children, profilePictureURL, userName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 text-xl">
      <div className="flex">
        <Sidebar />
        <div className="main-content">
          <Topnav profilePictureURL={profilePictureURL} user={userName} />
          <main>
            {children}
            <button onClick={openModal}>Open Modal</button>
            {/* <UserModal isOpen={isModalOpen} onClose={closeModal}>
              <div>
                <h2>Modal Content</h2>
                <p>Put your modal content here.</p>
              </div>
            </UserModal> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
