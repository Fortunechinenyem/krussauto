import { connectToDatabase } from "../../db/index";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { email, password } = req.body;

  // Validate the input
  if (!email || !password) {
    res.status(400).json({ message: "Email and password are required" });
    return;
  }

  try {
    const client = await connectToDatabase();
    const db = client.db("krussauto");
    const collection = db.collection("users");

    // Find the user with the provided email and password
    const user = await collection.findOne({ email, password });

    if (user) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }

    client.close();
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
