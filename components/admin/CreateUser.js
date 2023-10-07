import React, { useState } from "react";

const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [creationError, setCreationError] = useState(null);

  const handleCreateUser = () => {
    setIsCreating(true);
    setCreationError(null);

    fetch("/api/createUser", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, email }), // Pass firstName, lastName, and email
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
        setFirstName("");
        setLastName("");
        setEmail("");
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
        placeholder="Enter first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleCreateUser} disabled={isCreating}>
        {isCreating ? "Creating..." : "Create"}
      </button>
      {creationError && <p className="error">Error: {creationError}</p>}
    </div>
  );
};

export default CreateUser;
