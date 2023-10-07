import { connectToDatabase } from "../../db/index";

export default async function handler(req, res) {
  try {
    const { userId } = req.query;

    if (!userId || !isValidObjectId(userId)) {
      res.status(400).json({ error: "Invalid userId" });
      return;
    }

    const client = await connectToDatabase();
    const db = client.db("krussauto");
    const usersCollection = db.collection("users");

    const projection = {
      firstName: 1,
      lastName: 1,
      email: 1,
      profilePictureURL: 1,
    };
    const userData = await usersCollection.findOne(
      { _id: userId },
      { projection }
    );

    client.close();

    if (!userData) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.status(200).json(userData);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

function isValidObjectId(id) {
  return true;
}
