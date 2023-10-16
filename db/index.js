import { MongoClient } from "mongodb";
import { getUsers } from "../models/users";
import { getAppointments, createAppointment } from "../models/appointment";

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

export async function createNewAppointment(appointmentData) {
  const client = await connectToDatabase();
  const db = client.db();

  const result = await db.collection("appointment").insertOne(appointmentData);

  return result;
}

export async function getAllAppointments() {
  const client = await connectToDatabase();
  const db = client.db();

  const appointments = await db.collection("appointment").find().toArray();

  return appointments;
}
// Investors
export async function getAllInvestors() {
  const client = await connectToDatabase();
  const db = client.db();

  const investors = await db.collection("investors").find().toArray();

  return investors;
}

export async function saveInvestor(investorData) {
  const client = await connectToDatabase();
  const db = client.db("krussauto");
  const investorsCollection = db.collection("investors");

  const result = await investorsCollection.insertOne(investorData);

  return result.insertedId;
}

export async function updateInvestor(investorId, newData) {
  const client = await connectToDatabase();
  const db = client.db();

  const result = await db
    .collection("investors")
    .updateOne({ _id: investorId }, { $set: newData });

  return result;
}
