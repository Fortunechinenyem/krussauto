import React, { useState, useEffect } from "react";

const ServiceHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch service history data from API
    // Example API call using fetch:
    fetch("https://api.example.com/service-history")
      .then((response) => response.json())
      .then((data) => setHistory(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Service History</h2>
      {history.map((entry) => (
        <div key={entry.id} className="mb-4">
          <h3 className="text-xl font-bold">{entry.date}</h3>
          <p>{entry.description}</p>
          <p className="text-gray-500">Mileage: {entry.mileage}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceHistory;
