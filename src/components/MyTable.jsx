import React from "react";
import { Table } from "reactstrap";
import styled from "styled-components";
import { OutlineButton } from "../components/Button";

const MyTable = ({ users }) => {
  return (
    <StyledSection>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>User-Name</th>
            <th>Email</th>
            <th>Created-At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={index}>
                <td>{index}</td>
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
                  <div className="buttons">
                    <OutlineButton className="mr-2 ">Block</OutlineButton>
                    <OutlineButton className="mr-2">Remove</OutlineButton>
                  </div>
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
    background-color: gray;
  }

  tbody img.avatar-image {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .buttons {
    margin-left: 3rem;
  }
`;
export default MyTable;
