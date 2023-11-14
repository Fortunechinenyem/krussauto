import React, { useState } from "react";
import { useRouter } from "next/router";
import Modal from "react-modal";

const services = [
  "Pre-Purchase Inspection",
  "Auto-Errand As A Service",
  "Fleet Management",
  "Buy, Sell Cars",
  "Car Diagnostics",
  "Auto Consultancy",
];

const consultationOptions = ["Virtual", "Physical"];

const Appointment = () => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  //   useEffect(() => {
  //     if (
  //       router.query.openAppointmentModal ||
  //       !router.asPath.includes("/appointment")
  //     ) {
  //       setModalIsOpen(true);
  //     }
  //   }, [router.query]);

  const closeModal = () => {
    setModalIsOpen(false);
    setFormSubmitted(false);
  };
  const styles = {
    container: {
      margin: "2rem auto",
      padding: "5rem 2rem ",
      maxWidth: "600px",
      background: "#3D8D89",
      borderRadius: "20px",
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
      backgroundColor: "#F5F9FF",
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
    <div className="container mx-auto">
      <div className=" mt-12   py-12 md:py-12">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              width: "50%",
              margin: "auto",
            },
          }}
        >
          <h2 style={styles.header}>Book an Appointment</h2>
          {formSubmitted ? (
            <div style={styles.successMessage}>
              <p>Your appointment has been booked successfully!</p>
              <button
                className="button2"
                style={styles.button}
                onClick={closeModal}
              >
                Close
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
              {selectedService === "Auto Consultancy" && ( // Render consultation options only for Auto Consultancy
                <select
                  value={consultationType}
                  onChange={(e) => setConsultationType(e.target.value)}
                  style={styles.select}
                  required
                >
                  <option value="">Select Consultation Type</option>
                  {consultationOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              <input
                type="text"
                style={styles.input}
                placeholder="Full Name"
                value={fullName}
                onChange={handleFullNameChange}
                required
              />
              <input
                type="text"
                style={styles.input}
                placeholder="Location"
                value={location}
                onChange={handleLocationChange}
              />
              <textarea
                style={styles.textarea}
                placeholder="Drop a Note"
                value={message}
                onChange={handleMessageChange}
              />
              <button type="submit" className="button2 mt-4">
                Book Appointment
              </button>
              <button className="button2 mt-4" onClick={closeModal}>
                Close
              </button>
            </form>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Appointment;