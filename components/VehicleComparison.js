import React, { useState, useEffect } from "react";

const VehicleComparison = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch vehicle comparison data from API
    // Example API call using fetch:
    fetch("https://api.example.com/vehicle-comparison")
      .then((response) => response.json())
      .then((data) => setVehicles(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Vehicle Comparison</h2>
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="mb-4">
          <h3 className="text-xl font-bold">
            {vehicle.make} {vehicle.model}
          </h3>
          <p>Price: ${vehicle.price}</p>
          <p>Engine: {vehicle.engine}</p>
          <p>Transmission: {vehicle.transmission}</p>
        </div>
      ))}
    </div>
  );
};

export default VehicleComparison;
