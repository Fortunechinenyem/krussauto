import React, { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/users");
        console.log("Response:", response); // Log the response
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched users:", data); // Log the fetched users
          setUsers(data);
        } else {
          console.error("Error fetching users:", response.statusText);
          setError("Failed to fetch users. Please try again.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setError("An error occurred while fetching users.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {error && <p className="error">{error}</p>}
      {isLoading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user._id}>
                {user.firstName} {user.lastName} - {user.email}
              </li>
            ))
          ) : (
            <p>No users available.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default UsersList;
