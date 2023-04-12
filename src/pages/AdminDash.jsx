import React from "react";
import Sidebar from "../components/SideBar";
import { UserAuth } from "../context/AuthContext";

const AdminDash = () => {
  const { user } = UserAuth() ?? {};

  return (
    <div className="admin-dashboard">
      <Sidebar user={user} />
    </div>
  );
};

export default AdminDash;
