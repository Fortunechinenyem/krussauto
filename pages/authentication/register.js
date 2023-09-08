import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import Image from "next/image";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [profilePictureURL, setProfilePictureURL] = useState(null);
  const isLoggedIn = true;

  const handleProfilePictureChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePictureURL(reader.result); // Set URL instead of data URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
        }),
      });

      const data = await response.json();
      console.log("Response from /api/register:", data); // Log the response

      if (response.ok) {
        console.log(data.message);

        // Fetch user data from an API endpoint
        const userDataResponse = await fetch("/api/getUserData");
        const userData = await userDataResponse.json();

        router.push(`/dashboard?user=${JSON.stringify(userData)}`);
      } else {
        console.error("Registration failed:", data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <nav className="flex justify-between items-center bg-white p-4 w-full">
        {isLoggedIn && profilePictureURL && (
          <div className="flex items-center">
            <img
              src={profilePictureURL}
              alt="Profile Picture"
              width={110}
              height={110}
              className="rounded-full"
            />
          </div>
        )}
      </nav>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md p-8"
      >
        <div className="mb-4">
          <label htmlFor="firstName" className="text-lg font-semibold">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="text-lg font-semibold">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-lg font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        {isLoggedIn && (
          <div className="mb-4">
            <label htmlFor="profilePicture" className="text-lg font-semibold">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            {profilePictureURL && (
              <div className="flex items-center justify-center">
                <img
                  src={profilePictureURL}
                  alt="Profile Picture"
                  width={110}
                  height={110}
                  className="rounded-full"
                />
              </div>
            )}
          </div>
        )}

        <button
          type="submit"
          className="bg-[#006950] text-white font-bold rounded-md px-6 py-2 text-lg hover:bg-[#005740] transition-colors duration-300"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-4">
        <p className="text-gray-600">Already have an account?</p>
        <Link href="/authentication/login">
          <button className="text-[#006950] font-semibold hover:underline">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
