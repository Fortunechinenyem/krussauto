import React, { useState, useEffect } from "react";

const VehicleRecommendations = () => {
  const [vehicleRecommendations, setVehicleRecommendations] = useState(null);

  useEffect(() => {
    // Fetch vehicle recommendations data from API
    fetch("/api/getVehicleRecommendations")
      .then((response) => response.json())
      .then((data) => setVehicleRecommendations(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Vehicle Recommendations</h2>
      {vehicleRecommendations ? (
        <ul>
          {vehicleRecommendations.map((recommendation) => (
            <li key={recommendation.id}>{recommendation.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading vehicle recommendations...</p>
      )}
    </div>
  );
};

export default VehicleRecommendations;
