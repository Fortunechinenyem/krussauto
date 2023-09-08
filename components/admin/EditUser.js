import React, { useState } from "react";

const EditUser = ({ user, onCancel }) => {
  const [editedName, setEditedName] = useState(user.name);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);

  const handleSaveChanges = () => {
    setIsSaving(true); // Set isSaving to true to indicate saving is in progress
    setSaveError(null); // Clear any previous save errors

    fetch(`/api/editUser/${user.id}`, {
      method: "PUT",
      body: JSON.stringify({ name: editedName }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to update user");
        }
      })
      .then((data) => {
        console.log(`User ${user.id} updated successfully:`, data);
        setIsSaving(false); // Set isSaving to false after successful update
        onCancel();
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        setIsSaving(false); // Set isSaving to false on error
        setSaveError("Failed to update user. Please try again."); // Set the save error message
      });
  };

  return (
    <div>
      <h2>Edit User</h2>
      <input
        type="text"
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
      />
      <button onClick={handleSaveChanges} disabled={isSaving}>
        {isSaving ? "Saving..." : "Save Changes"}
      </button>
      <button onClick={onCancel}>Cancel</button>
      {saveError && <p className="error">{saveError}</p>}
    </div>
  );
};

export default EditUser;

// import React, { useState, useEffect } from "react";
// import { getUser, updateUser } from "../../pages/api/users"; // Import your API functions

// const EditUser = ({ userId }) => {
//   const [userData, setUserData] = useState({ name: "", email: "" });

//   useEffect(() => {
//     // Fetch the user's data using the API function and set the state
//     getUser(userId).then((data) => setUserData(data));
//   }, [userId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Update the user's data using the API function
//     await updateUser(userId, userData);
//     // Reset the form or perform any necessary actions
//   };

//   return (
//     <div>
//       <h2>Edit User</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={userData.name}
//           onChange={(e) => setUserData({ ...userData, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={userData.email}
//           onChange={(e) => setUserData({ ...userData, email: e.target.value })}
//         />
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };

// export default EditUser;
