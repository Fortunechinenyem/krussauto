import React, { useState } from "react";
import { useRouter } from "next/router";
import { services, consultationOptions } from "@/components/constants";
import Navbar from "@/components/Nav/Navbar";

const Appointment = () => {
  const router = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [consultationType, setConsultationType] = useState("");

  const handleDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setAppointmentTime(e.target.value);
  };

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setSelectedService(selectedService);

    if (selectedService !== "Auto Consultancy") {
      setConsultationType("");
    }
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!appointmentDate || !appointmentTime || !selectedService || !fullName) {
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: appointmentDate,
          time: appointmentTime,
          service: selectedService,
          fullName: fullName,
          message: message,
          consultationType: consultationType,
        }),
      });

      if (response.ok) {
        console.log(
          "Appointment booked:",
          appointmentDate,
          appointmentTime,
          selectedService,
          consultationType,
          fullName,
          message
        );
        setFormSubmitted(true);
      } else {
        console.error("Failed to book appointment");
        alert("Failed to book appointment. Please try again.");
      }

      setAppointmentDate("");
      setAppointmentTime("");
      setSelectedService("");
      setConsultationType("");
      setFullName("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#2A8682] p-8">
            <h2 className="text-3xl font-bold text-white text-center">
              Book an Appointment
            </h2>
          </div>
          <div className="p-8">
            {formSubmitted ? (
              <div className="text-center">
                <p className="text-green-600 text-lg font-semibold">
                  Your appointment has been booked successfully!
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Appointment Date
                  </label>
                  <input
                    type="date"
                    className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={appointmentDate}
                    onChange={handleDateChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Appointment Time
                  </label>
                  <input
                    type="time"
                    className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={appointmentTime}
                    onChange={handleTimeChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select a Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={handleServiceChange}
                    className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a Service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedService === "Auto Consultancy" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Consultation Type
                    </label>
                    <select
                      value={consultationType}
                      onChange={(e) => setConsultationType(e.target.value)}
                      className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Consultation Type</option>
                      {consultationOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={fullName}
                    onChange={handleFullNameChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={location}
                    onChange={handleLocationChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Drop a Note
                  </label>
                  <textarea
                    className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={message}
                    onChange={handleMessageChange}
                    rows="4"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full button px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Book Appointment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
