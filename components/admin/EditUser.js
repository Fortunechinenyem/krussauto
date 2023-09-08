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
