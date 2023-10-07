import { connectToDatabase } from "../db/index";

export async function createDiscussionPost(postData) {
  const client = await connectToDatabase();
  const db = client.db();
  const postsCollection = db.collection("discussionposts");
  const result = await postsCollection.insertOne(postData);
  return result.insertedId;
}

export async function getDiscussionPosts() {
  const client = await connectToDatabase();
  const db = client.db();
  const postsCollection = db.collection("discussionposts");
  const posts = await postsCollection.find().toArray();
  return posts;
}

export async function updateDiscussionPost(postId, postData) {
  const client = await connectToDatabase();
  const db = client.db();
  const postsCollection = db.collection("discussionposts");
  const result = await postsCollection.updateOne(
    { _id: postId },
    { $set: postData }
  );
  return result.modifiedCount > 0;
}

export async function deleteDiscussionPost(postId) {
  const client = await connectToDatabase();
  const db = client.db();
  const postsCollection = db.collection("discussionposts");
  const result = await postsCollection.deleteOne({ _id: postId });
  return result.deletedCount > 0;
}
