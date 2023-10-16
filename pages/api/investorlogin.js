import { getInvestorByEmailAndPassword } from "../../db/index";

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
    const investor = await getInvestorByEmailAndPassword(email, password);

    if (investor) {
      // Investor found, login successful
      res.status(200).json({ message: "Login successful" });
    } else {
      // Investor not found or invalid credentials
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
