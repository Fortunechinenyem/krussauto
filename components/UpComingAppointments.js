import React, { useState, useEffect } from "react";

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch upcoming appointments data from API
    // Example API call using fetch:
    fetch("https://api.example.com/upcoming-appointments")
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Upcoming Appointments</h2>
      {appointments.map((appointment) => (
        <div key={appointment.id} className="mb-4">
          <h3 className="text-xl font-bold">{appointment.date}</h3>
          <p>{appointment.description}</p>
          <p className="text-gray-500">Location: {appointment.location}</p>
        </div>
      ))}
    </div>
  );
};

export default UpcomingAppointments;
