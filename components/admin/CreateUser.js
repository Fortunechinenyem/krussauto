import React, { useState } from "react";

const CreateUser = () => {
  const [userName, setUserName] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [creationError, setCreationError] = useState(null);

  const handleCreateUser = () => {
    setIsCreating(true);
    setCreationError(null);

    fetch("/api/createUser", {
      method: "POST",
      body: JSON.stringify({ name: userName }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to create user");
        }
      })
      .then((data) => {
        console.log("User created successfully:", data);
        setIsCreating(false);
        setUserName("");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        setIsCreating(false);
        setCreationError("Failed to create user. Please try again.");
      });
  };

  return (
    <div>
      <h2>Create User</h2>
      <input
        type="text"
        placeholder="Enter user name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleCreateUser} disabled={isCreating}>
        {isCreating ? "Creating..." : "Create"}
      </button>
      {creationError && <p className="error">{creationError}</p>}
    </div>
  );
};

export default CreateUser;
