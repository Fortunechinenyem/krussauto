import { connectToDatabase } from "../db/index";

export async function createInvestor(investorData) {
  const client = await connectToDatabase();
  const db = client.db("krussauto");
  const investorsCollection = db.collection("investors");
  const result = await investorsCollection.insertOne(investorData);
  return result.insertedId;
}

export async function updateInvestor(investorId, newData) {
  const client = await connectToDatabase();
  const db = client.db("krussauto");
  const investorsCollection = db.collection("investors");
  const result = await investorsCollection.updateOne(
    { _id: investorId },
    { $set: newData }
  );
  return result.modifiedCount > 0;
}

export async function getInvestorByEmailAndPassword(email, password) {
  try {
    const client = await connectToDatabase();
    const db = client.db("krussauto");

    const investor = await db.collection("investors").findOne({
      email,
      password,
    });

    client.close();

    return investor;
  } catch (error) {
    console.error("Error fetching investor by email and password:", error);
    throw error;
  }
}

export async function getAllInvestors() {
  try {
    const client = await connectToDatabase();
    const db = client.db("krussauto");

    const investors = await db.collection("investors").find().toArray();

    client.close();

    return investors;
  } catch (error) {
    console.error("Error fetching investors:", error);
    throw error;
  }
}
