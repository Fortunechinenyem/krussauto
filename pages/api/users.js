import { connectToDatabase } from "../../db/index";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const client = await connectToDatabase();
    const usersCollection = client.db().collection("users");

    const users = await usersCollection.find().toArray();

    client.close();

    res.status(200).json(users);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
