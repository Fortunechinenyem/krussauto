import React, { useState } from "react";
import Hero from "../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Appointment = () => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setAppointmentTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your booking logic here
    console.log("Appointment booked:", appointmentDate, appointmentTime);
    // Reset form fields
    setAppointmentDate("");
    setAppointmentTime("");
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 text-xl">
      <Navbar />
      <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={Hero}
          alt="hero"
          priority
        />
        <div className="p-6 md:p-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            Appointment
          </h1>
        </div>
      </div>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="date"
            className="py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Appointment Date"
            value={appointmentDate}
            onChange={handleDateChange}
            required
          />
          <input
            type="time"
            className="py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Appointment Time"
            value={appointmentTime}
            onChange={handleTimeChange}
            required
          />
          <button
            type="submit"
            className="m-4 btn text-black bg-[#3ADFF1]  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Book Appointment
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Appointment;
