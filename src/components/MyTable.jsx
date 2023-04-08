import React from "react";
import { useState } from "react";
import { Table, Button } from "reactstrap";

const MyTable = ({ users }) => {
  const [sortField, setSortField] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const toggleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };
  console.log(users);

  return (
    <Table>
      <thead>
        <tr>
          <th onClick={() => toggleSort("name")}>Name</th>
          <th onClick={() => toggleSort("email")}>Email</th>
          <th onClick={() => toggleSort("role")}>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user) => (
            <tr key={user.uid}>
              <td>
                {user ? (
                  <img
                    src={user.photoURL}
                    alt={user.photoURL}
                    className="avatar-image"
                  />
                ) : null}

                {user.displayName}
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt.toDate().toLocaleString()}</td>
              <td>
                <Button color="primary" size="sm" className="mr-2">
                  Edit
                </Button>
                <Button color="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default MyTable;
