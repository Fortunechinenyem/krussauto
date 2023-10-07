import { connectToDatabase } from "../../db/index";

export async function createUser(userData) {
  const client = await connectToDatabase();
  const db = client.db();
  const usersCollection = db.collection("users");
  const result = await usersCollection.insertOne(userData);
  return result.insertedId;
}

export async function getUsers() {
  const client = await connectToDatabase();
  const db = client.db("krussauto");
  const usersCollection = db.collection("users");
  const users = await usersCollection.find().toArray();
  return users;
}

export async function updateUser(userId, userData) {
  const client = await connectToDatabase();
  const db = client.db();
  const usersCollection = db.collection("users");
  const result = await usersCollection.updateOne(
    { _id: userId },
    { $set: userData }
  );
  return result.modifiedCount > 0;
}

export async function deleteUser(userId) {
  const client = await connectToDatabase();
  const db = client.db();
  const usersCollection = db.collection("users");
  const result = await usersCollection.deleteOne({ _id: userId });
  return result.deletedCount > 0;
}
