import React from "react";

const Topnav = ({ profilePictureURL, user }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <div className="text-lg">Welcome, {user}</div>
      <div className="flex items-center">
        {profilePictureURL && (
          <img
            src={profilePictureURL}
            alt="Profile Picture"
            width={50}
            height={50}
            className="rounded-full"
          />
        )}
      </div>
    </div>
  );
};

export default Topnav;
