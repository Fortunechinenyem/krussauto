import React, { useState } from "react";

import { GoLocation } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import Image from "next/image";
import Navbar from "@/components/Nav/Navbar";
import { AboutHero } from "@/public/images";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    let data = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setSubmitted(true);
      } else {
        console.log("Response failed!");
      }
    } catch (error) {
      console.log("Error occurred:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className=" container mx-auto mt-12   py-10 md:py-10">
      <Navbar />
      <div className="container mx-auto text-center my-12 mb-7">
        <h3 className="font-bold text-4xl mb-7">Get in Touch</h3>
        <p className="text-xl">
          Tell us where you are and where you want to be.
        </p>
        <p className="text-xl">We’ll be glad to take you there.</p>
      </div>
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className=" flex flex-col justify-around md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-[#7ebebe] w-full max-w-6xl p-8 rounded-xl shadow-lg text-black">
          <div className="justify-around">
            <div>
              <h3 className="font-bold text-4xl">
                Reinvent your experience with us
              </h3>
            </div>
            <div className=" space-y-5 mt-9 mb-5">
              <div className="flex items-center space-x-2 ml-0">
                <span className="text-2xl">
                  <GoLocation />
                </span>
                <p className="text-xl">Lagos State, Nigeria.</p>
              </div>
              <div className="flex items-center space-x-2 ml-0">
                <span className="text-2xl">
                  <HiOutlineMailOpen />
                </span>
                <p className="text-xl">buzzimails@gmail.com</p>
              </div>
              <Image
                className=" w-full h-full   "
                src={AboutHero}
                alt="about hero"
                priority
              />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-10 max-w-2xl text-gray-600 md:w-100 mb-7">
            <form onSubmit={handleSubmit} className=" space-y-4 mb-9">
              <div>
                <label>Names</label>
                <input
                  required
                  type="text"
                  placeholder="Your full name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:none mt-2"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  required
                  type="email"
                  placeholder="Enter your email address"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:none mt-2"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Subject</label>
                <input
                  required
                  type="text"
                  placeholder="Enter the subject"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:none mt-2"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Message</label>
                <textarea
                  required
                  placeholder="Message"
                  rows="5"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus-none"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className=" button px-6 py-2 text-lg px-6 py-3 rounded-md text-sm font-medium"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Send Message"}
              </button>
              {submitted && (
                <div className="text-green-500">
                  Message submitted successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
