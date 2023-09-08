import { connectToDatabase } from "../db/index";

export async function createPost(postData) {
  const client = await connectToDatabase();
  const db = client.db();
  const postsCollection = db.collection("users");
  const result = await postsCollection.insertOne(postData);
  return result.insertedId;
}

export async function getPosts() {
  const client = await connectToDatabase();
  const db = client.db();
  const postsCollection = db.collection("users");
  const posts = await postsCollection.find().toArray();
  return posts;
}
export async function createUser(userData) {
  const client = await connectToDatabase();
  const db = client.db();
  const usersCollection = db.collection("users");
  const result = await usersCollection.insertOne(userData);
  return result.insertedId;
}

export async function updateUser(userId, newData) {
  const client = await connectToDatabase();
  const db = client.db();
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
    const db = client.db();

    const users = await db.collection("users").find().toArray();

    client.close();

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
