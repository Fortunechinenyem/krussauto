import React, { useState, useEffect } from "react";

const DiscussionBoard = () => {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    // Fetch discussion board data from API
    fetch("/api/getDiscussionBoard")
      .then((response) => response.json())
      .then((data) => setDiscussionPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Discussion Board</h2>
      {discussions.map((discussion) => (
        <div key={discussion.id} className="mb-4">
          <h3 className="text-xl font-bold">{discussion.title}</h3>
          <p className="text-gray-500">{discussion.author}</p>
          <p>{discussion.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DiscussionBoard;
