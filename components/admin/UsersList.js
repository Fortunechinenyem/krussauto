import React, { useState, useEffect } from "react";

const UsersList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/listUsers")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch users");
        }
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError(error.message); // Set the error message in the state
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} <button onClick={() => onEdit(user)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
