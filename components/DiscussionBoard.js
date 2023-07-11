import React, { useState, useEffect } from "react";

const DiscussionBoard = () => {
  const [discussions, setDiscussions] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/api/discussion-board")
      .then((response) => response.json())
      .then((data) => setDiscussions(data))
      .catch((error) => console.error(error));
  }, []);

  const handlePostSubmit = (e) => {
    e.preventDefault();

    // Perform validation checks on title, author, and content
    if (!title || !author || !content) {
      return;
    }

    // Create the new discussion post object
    const newPost = {
      title,
      author,
      content,
    };

    // Make a POST request to the API to save the new post
    fetch("/api/discussion-board", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the discussions state with the new post
        setDiscussions([...discussions, data]);

        // Clear the form fields
        setTitle("");
        setAuthor("");
        setContent("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Discussion Board</h2>
      {discussions.map((discussion) => (
        <div key={discussion._id} className="mb-4">
          <h3 className="text-xl font-bold">{discussion.title}</h3>
          <p className="text-gray-500">{discussion.author}</p>
          <p>{discussion.content}</p>
        </div>
      ))}

      <form onSubmit={handlePostSubmit}>
        <h4 className="text-lg font-bold mb-2">Post a new discussion</h4>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button
          className="bg-[#006950] text-white font-bold rounded-md px-6 py-2 text-lg hover:bg-[#005740] transition-colors duration-300"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default DiscussionBoard;
