import { saveInvestor } from "../../db/index";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { firstName, lastName, email } = req.body;

  // Validate the input
  if (!firstName || !lastName || !email) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  try {
    const investorData = {
      firstName,
      lastName,
      email,
    };

    // Save the investor data
    await saveInvestor(investorData);

    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.error("An error occurred:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message }); // Log the error message
  }
}
