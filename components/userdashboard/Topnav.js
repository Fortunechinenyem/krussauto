import React from "react";
// import Link from "next/link";

const Topnav = ({ profilePicture }) => {
  return (
    <div className="p-4 flex gap-4 items-center">
      {/* <div>
        <Link href="/account" className="hover:text-gray-300">
          Account
        </Link>
      </div> */}
      {profilePicture && (
        <div className="rounded-full overflow-hidden">
          <img
            src={profilePicture}
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default Topnav;
