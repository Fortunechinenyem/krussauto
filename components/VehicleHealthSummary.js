import React, { useState, useEffect } from "react";

const VehicleHealthSummary = () => {
  const [vehicleHealth, setVehicleHealth] = useState(null);

  useEffect(() => {
    // Fetch vehicle health summary data from API
    // Example API call using fetch:
    fetch("https://api.example.com/vehicle-health-summary")
      .then((response) => response.json())
      .then((data) => setVehicleHealth(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Vehicle Health Summary</h2>
      {vehicleHealth ? (
        <div>
          <p>Overall Condition: {vehicleHealth.condition}</p>
          <p>Mileage: {vehicleHealth.mileage} miles</p>
          <p>Last Maintenance: {vehicleHealth.lastMaintenance}</p>
        </div>
      ) : (
        <p>Loading vehicle health summary...</p>
      )}
    </div>
  );
};

export default VehicleHealthSummary;
