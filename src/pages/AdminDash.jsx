import React from "react";
import SideBar from "../components/SideBar";
import { UserAuth } from "../context/AuthContext";

const AdminDash = () => {
  const { user } = UserAuth() ?? {};

  return (
    <div className="admin-dashboard">
      <SideBar user={user} />
    </div>
  );
};

export default AdminDash;
