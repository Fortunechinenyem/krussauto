// Import any necessary dependencies

// Example array of inspections
const inspections = [
  {
    id: 1,
    vehicle: "Vehicle 1",
    date: "2023-06-01",
    // Include any other relevant data
  },
  {
    id: 2,
    vehicle: "Vehicle 2",
    date: "2023-06-05",
    // Include any other relevant data
  },
  // Add more inspections
];

// Route handler to get all inspections
export default function handler(req, res) {
  if (req.method === "GET") {
    // Return the array of inspections
    res.status(200).json(inspections);
  } else {
    // Handle other HTTP methods if needed
    res.status(405).end(); // Method Not Allowed
  }
}
