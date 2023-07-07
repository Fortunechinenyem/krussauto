// Import any necessary dependencies

// Example array of inspection reports
const reports = [
  {
    id: 1,
    title: "Report 1",
    date: "2023-06-01",
    // Include any other relevant data
  },
  {
    id: 2,
    title: "Report 2",
    date: "2023-06-05",
    // Include any other relevant data
  },
  // Add more inspection reports
];

// Route handler to get all inspection reports
export default function handler(req, res) {
  if (req.method === "GET") {
    // Return the array of inspection reports
    res.status(200).json(reports);
  } else {
    // Handle other HTTP methods if needed
    res.status(405).end(); // Method Not Allowed
  }
}
