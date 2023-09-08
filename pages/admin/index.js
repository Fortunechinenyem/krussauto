import React, { useState, useEffect } from "react";
import AdminLayout from "@/layout/AdminLayout";
import UsersList from "@/components/admin/UsersList";
import CreateUser from "@/components/admin/CreateUser";
import EditUser from "@/components/admin/EditUser";

// const response = await fetch("/api/listUsers");

const AdminPage = () => {
  const [view, setView] = useState("list");
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = (newView) => {
    setView(newView);
    setSelectedUser(null);
  };

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
        setIsLoading(false);
      });
  }, []);

  return (
    <AdminLayout>
      {view === "list" && (
        <UsersList
          users={users}
          isLoading={isLoading}
          onEdit={(user) => setSelectedUser(user)}
        />
      )}
      {view === "create" && <CreateUser />}
      {view === "edit" && (
        <EditUser user={selectedUser} onCancel={() => navigate("list")} />
      )}
    </AdminLayout>
  );
};

export default AdminPage;
