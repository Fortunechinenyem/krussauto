import React, { useState, useEffect } from "react";

const RoadsideAssistance = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch roadside assistance data from API
    // Example API call using fetch:
    fetch("https://api.example.com/roadside-assistance")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Roadside Assistance</h2>
      {services.map((service) => (
        <div key={service.id} className="mb-4">
          <h3 className="text-xl font-bold">{service.title}</h3>
          <p>{service.description}</p>
          <p className="text-gray-500">Contact: {service.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default RoadsideAssistance;
