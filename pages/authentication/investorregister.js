import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function InvestorRegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/investorregister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
        }),
      });

      const data = await response.json();
      console.log("Response from /api/investorregister:", data);

      if (response.ok) {
        console.log(data.message);

        router.push("/dashboard");
      } else {
        console.error("Registration failed:", data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center px-6 py-10 md:py-16">
        <h3 className="text-3xl font-bold">
          Become an Investor in Automobile Trading
        </h3>
        <p className="text-lg md:text-xl mt-4">Invest and grow your wealth.</p>
      </div>

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

        <button type="submit" className="button transition-colors duration-300">
          Sign Up as an Investor
        </button>
      </form>

      <div className="mt-4">
        <p className="text-gray-600">Already have an account?</p>
        <Link href="/authentication/investorlogin">
          <button className="">Login</button>
        </Link>
      </div>
    </div>
  );
}
