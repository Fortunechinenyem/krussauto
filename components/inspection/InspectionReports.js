import { useEffect, useState } from "react";
import axios from "axios";

export default function InspectionReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch inspection reports from the server
    const fetchReports = async () => {
      try {
        const response = await axios.get("/api/reports");
        setReports(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div>
      <h2>Inspection Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            <p>Car Model: {report.carModel}</p>
            <p>Inspection Date: {report.inspectionDate}</p>
            {/* Display other report details */}
          </li>
        ))}
      </ul>
    </div>
  );
}
