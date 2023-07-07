import { useState } from "react";
import axios from "axios";

export default function CreateNewInspection() {
  const [carModel, setCarModel] = useState("");
  const [inspectionDate, setInspectionDate] = useState("");

  const handleCreateInspection = async () => {
    try {
      // Send a request to the server to create a new inspection
      await axios.post("/api/inspections", {
        carModel,
        inspectionDate,
      });

      // Reset form values
      setCarModel("");
      setInspectionDate("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create New Inspection</h2>
      <form onSubmit={handleCreateInspection}>
        <input
          type="text"
          placeholder="Car Model"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
        <input
          type="date"
          placeholder="Inspection Date"
          value={inspectionDate}
          onChange={(e) => setInspectionDate(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
