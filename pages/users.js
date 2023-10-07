import CreateUser from "@/components/admin/CreateUser";
import UsersList from "@/components/admin/UsersList";
import React from "react";

const UsersPage = () => {
  return (
    <div>
      <h1>Users Page</h1>
      <UsersList />
      <CreateUser />
    </div>
  );
};

export default UsersPage;
