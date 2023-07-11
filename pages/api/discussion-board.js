import { connectToDatabase } from "../../db/index";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const db = await connectToDatabase();
      const discussionPosts = await db
        .collection("discussionposts")
        .find()
        .toArray();
      res.status(200).json(discussionPosts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method === "POST") {
    try {
      const { title, author, content } = req.body;

      if (!title || !author || !content) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const db = await connectToDatabase();
      const newDiscussionPost = await db
        .collection("discussionposts")
        .insertOne({
          title,
          author,
          content,
        });
      res.status(201).json(newDiscussionPost.ops[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
