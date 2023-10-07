import { getUsers } from "../../models/users";

export default async function handler(req, res) {
  try {
    console.log("Fetching users...");
    if (req.method === "GET") {
      const users = await getUsers();
      res.status(200).json(users);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
