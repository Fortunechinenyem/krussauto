import { updateUser } from "../../models/users"; // Import the updateUser function from your model

export default async function handler(req, res) {
  try {
    const userId = req.query.id;
    if (req.method === "PUT") {
      const { name } = req.body;

      // Call the updateUser function to update the user's name
      const updatedUser = await updateUser(userId, { name });

      if (updatedUser) {
        res
          .status(200)
          .json({ message: `User ${userId} updated with name: ${name}` });
      } else {
        res.status(404).json({ message: `User ${userId} not found` });
      }
    } else {
      res.status(405).end();
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
