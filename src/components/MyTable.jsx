import React from "react";
import { useState } from "react";
import { Table, Button } from "reactstrap";
import styled from "styled-components";
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
    <StyledSection>
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
    </StyledSection>
  );
};

const StyledSection = styled.section`
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  th,
  td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  thead th {
    cursor: pointer;
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }

  tbody img.avatar-image {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
export default MyTable;
