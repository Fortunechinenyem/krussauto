import { createUser } from "../../models/users";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { firstName, lastName, email } = req.body;

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
      res.status(405).end();
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
