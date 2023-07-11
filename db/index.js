import { MongoClient } from "mongodb";

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
