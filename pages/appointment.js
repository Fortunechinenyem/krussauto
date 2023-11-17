import React, { useState } from "react";
import { useRouter } from "next/router";
import { services, consultationOptions } from "@/components/constants";

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
    <div className="appointment-container  mx-auto">
      <div className="mt-12 p-4 appointment-card">
        <div className="bg-[#2A8682] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Book an Appointment
          </h2>
          {formSubmitted ? (
            <div className="text-green-500">
              <p>Your appointment has been booked successfully!</p>
            </div>
          ) : (
            <form className="space-y-4 " onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Appointment Date
                </label>
                <input
                  type="date"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={appointmentDate}
                  onChange={handleDateChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Appointment Time
                </label>
                <input
                  type="time"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={appointmentTime}
                  onChange={handleTimeChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Select a Service
                </label>
                <select
                  value={selectedService}
                  onChange={handleServiceChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
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
                <div className="mb-4">
                  <label className="block text-sm font-medium text-white">
                    Consultation Type
                  </label>
                  <select
                    value={consultationType}
                    onChange={(e) => setConsultationType(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
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
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={fullName}
                  onChange={handleFullNameChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Location
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={location}
                  onChange={handleLocationChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-white">
                  Drop a Note
                </label>
                <textarea
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  value={message}
                  onChange={handleMessageChange}
                />
              </div>

              <div className="text-center">
                <button type="submit" className="button2">
                  Book Appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
