import { connectToDatabase } from "../db/index";

export async function createUser(userData) {
  const client = await connectToDatabase();
  const db = client.db("krussauto");
  const usersCollection = db.collection("users");
  const result = await usersCollection.insertOne(userData);
  return result.insertedId;
}

export async function updateUser(userId, newData) {
  const client = await connectToDatabase();
  const db = client.db("krussauto");
  const usersCollection = db.collection("users");
  const result = await usersCollection.updateOne(
    { _id: userId },
    { $set: newData }
  );
  return result.modifiedCount > 0;
}
export async function getUsers() {
  try {
    const client = await connectToDatabase();
    const db = client.db("krussauto");

    const users = await db.collection("users").find().toArray();

    client.close();

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
