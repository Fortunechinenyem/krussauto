import { MongoClient } from "mongodb";
import { getUsers } from "../models/users";

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export async function connectToDatabase() {
  const client = new MongoClient(uri, options);
  await client.connect();
  return client;
}

export async function getAllDiscussionPosts() {
  const client = await connectToDatabase();
  const db = client.db();

  const discussionPosts = await db
    .collection("discussionposts")
    .find()
    .toArray();

  return discussionPosts;
}

export async function saveDiscussionPost(postData) {
  const client = await connectToDatabase();
  const db = client.db();

  const result = await db.collection("discussionposts").insertOne(postData);

  return result;
}

export default async function handler(req, res) {
  try {
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

export async function updateUser(userId, userData) {
  const client = await connectToDatabase();
  const db = client.db();

  const result = await db
    .collection("users")
    .updateOne({ _id: userId }, { $set: userData });

  return result;
}

export async function createUser(userData) {
  const client = await connectToDatabase();
  const db = client.db();

  const result = await db.collection("users").insertOne(userData);

  return result;
}
