import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa";

export const UserProfileCard = () => {
  return (
    <div className=" p-4 bg-[#141414] text-[#FAFAFA] card ">
      <div className="card-header">
        <FaUser size={24} />
        <h3>User Profile</h3>
      </div>
      <div className="card-content">
        <Image src="user-profile-image.jpg" alt="User Profile" />
        <h4>User's Name</h4>
        <p>Email: user@example.com</p>
        <p>Location: City, Country</p>
      </div>
    </div>
  );
};
