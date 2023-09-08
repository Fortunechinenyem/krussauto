import { createUser } from "../../models/users"; // Import the createUser function from your model

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { firstName, lastName, email } = req.body;

      // Create a new user using the createUser function
      const userData = {
        firstName,
        lastName,
        email,
      };

      const userId = await createUser(userData);

      if (userId) {
        res.status(201).json({ message: `User created with ID: ${userId}` });
      } else {
        res.status(500).json({ message: "Failed to create user" });
      }
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
