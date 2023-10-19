import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function InvestorRegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!acceptedTerms) {
      // Display an error message or prevent form submission
      alert("Please accept the terms and conditions before registering.");
      return;
    }

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

        router.push("/dashboard/investors");
      } else {
        console.error("Registration failed:", data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className=" text-[#FAFAFA] container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-[#00B0BA] to-gray-700">
      <div className="md:w-1/2 text-center px-6 py-10 md:py-16">
        <h3 className="text-3xl font-bold">
          Become an Investor in Automobile Trading
        </h3>
        <p className="text-lg md:text-xl mt-4">
          Invest and grow your wealth by participating in Nigeria's thriving
          automobile industry.
        </p>
        <p>
          Nigeria's automobile market is experiencing significant growth and
          offers numerous investment opportunities. With a rapidly growing
          population and an increasing demand for vehicles, investing in the
          automobile sector can be a rewarding venture. Whether you are
          interested in car dealerships, auto manufacturing, spare parts, or
          related services, the Nigerian automobile industry provides a fertile
          ground for investors.
        </p>
        <p>
          By becoming an investor, you can contribute to the development of the
          automobile industry, create job opportunities, and reap the benefits
          of a dynamic and evolving market. Explore the possibilities and start
          your journey towards a prosperous future in Nigeria's automobile
          trading sector.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="md:w-1/2  bg-white shadow-md rounded-md p-8"
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

        <div className="mb-4">
          <label className="text-lg font-semibold">Terms and Conditions</label>
          <p className="text-sm text-gray-600 mb-2">
            Please read and accept our terms and conditions before registering.
          </p>
          <input
            type="checkbox"
            id="acceptedTerms"
            checked={acceptedTerms}
            onChange={() => setAcceptedTerms(!acceptedTerms)}
            className="mr-2"
          />
          <label htmlFor="acceptedTerms" className="text-sm">
            I have read and accepted the terms and conditions
          </label>
        </div>

        <button type="submit" className="button transition-colors duration-300">
          Sign Up as an Investor
        </button>
        <div className="mt-4">
          <p className="text-gray-600">
            Already have an account?{" "}
            <span>
              <Link href="/authentication/investorlogin">
                <button className="">Login</button>
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
