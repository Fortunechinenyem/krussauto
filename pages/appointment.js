import React, { useState } from "react";
import Navbar from "@/components/Navbar";

const services = [
  "Pre-Purchase Inspection",
  "Auto-Errand As A Service",
  "Fleet Management",
  "Buy, Sell Cars",
  "Car Diagnostics",
  "Auto Consultancy",
];

const Appointment = () => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setAppointmentTime(e.target.value);
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!appointmentDate || !appointmentTime || !selectedService) {
      alert("Please select appointment date, time, and service.");
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
        }),
      });

      if (response.ok) {
        console.log(
          "Appointment booked:",
          appointmentDate,
          appointmentTime,
          selectedService
        );
        setFormSubmitted(true);
      } else {
        console.error("Failed to book appointment");
        alert("Failed to book appointment. Please try again.");
      }

      setAppointmentDate("");
      setAppointmentTime("");
      setSelectedService("");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="m-2 text-xl">
      <Navbar />

      <div className="mt-9">
        <h2 className="text-center text-2xl font-bold mb-4">
          Book an Appointment
        </h2>
        {formSubmitted ? (
          <div className="text-center">
            <p>Your appointment has been booked successfully!</p>
            <button
              className="btn bg-[#3ADFF1] hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium mt-4"
              onClick={() => setFormSubmitted(false)}
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="appointment-form">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="date"
                className="input-field"
                placeholder="Appointment Date"
                value={appointmentDate}
                onChange={handleDateChange}
                required
              />
              <input
                type="time"
                className="input-field"
                placeholder="Appointment Time"
                value={appointmentTime}
                onChange={handleTimeChange}
                required
              />
              <select
                value={selectedService}
                onChange={handleServiceChange}
                className="input-field"
                required
              >
                <option value="">Select a Service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="btn mb-5 bg-[#7FD1AE] hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium"
              >
                Book Appointment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Appointment;
