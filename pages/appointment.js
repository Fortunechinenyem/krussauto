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
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
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

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
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
        }),
      });

      if (response.ok) {
        console.log(
          "Appointment booked:",
          appointmentDate,
          appointmentTime,
          selectedService,
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
      setFullName("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const styles = {
    container: {
      margin: "2rem auto",
      padding: "1rem",
      maxWidth: "600px",
      background: "#515B6D",
      borderRadius: "10px",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    },
    header: {
      textAlign: "center",
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    input: {
      width: "100%",
      padding: "0.5rem",
      marginBottom: "0.5rem",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    select: {
      width: "100%",
      padding: "0.5rem",
      marginBottom: "0.5rem",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    textarea: {
      width: "100%",
      padding: "0.5rem",
      marginBottom: "0.5rem",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      backgroundColor: "#0B2546",
      color: "#fff",
      padding: "0.5rem 1rem",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    successMessage: {
      textAlign: "center",
      marginBottom: "1rem",
    },
  };

  return (
    <div>
      <Navbar />

      <div style={styles.container}>
        <h2 style={styles.header}>Book an Appointment</h2>
        {formSubmitted ? (
          <div style={styles.successMessage}>
            <p>Your appointment has been booked successfully!</p>
            <button
              style={styles.button}
              onClick={() => setFormSubmitted(false)}
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="date"
              style={styles.input}
              placeholder="Appointment Date"
              value={appointmentDate}
              onChange={handleDateChange}
              required
            />
            <input
              type="time"
              style={styles.input}
              placeholder="Appointment Time"
              value={appointmentTime}
              onChange={handleTimeChange}
              required
            />
            <select
              value={selectedService}
              onChange={handleServiceChange}
              style={styles.select}
              required
            >
              <option value="">Select a Service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <input
              type="text"
              style={styles.input}
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
            <textarea
              style={styles.textarea}
              placeholder="Drop a Note"
              value={message}
              onChange={handleMessageChange}
            />
            <button type="submit" style={styles.button}>
              Book Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Appointment;
