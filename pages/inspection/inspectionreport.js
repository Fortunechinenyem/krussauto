import axios from "axios";

export default function ReportsPage({ reports }) {
  return (
    <div>
      <h1>Inspection Reports</h1>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
            <span>Car Model: {report.carModel}</span>
            <span>Inspection Date: {report.inspectionDate}</span>
            {/* Display other report details */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get("/api/reports");
    const reports = response.data;

    return {
      props: { reports },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { reports: [] },
    };
  }
}
