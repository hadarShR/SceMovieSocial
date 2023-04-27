import React, { useState } from "react";
import { Table } from "reactstrap";
import styled from "styled-components";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const MyTable = ({ users }) => {
  const [onRequest, setOnRequest] = useState(false);

  const deleteUser = (user) => {
    if (onRequest) return;

    // Show confirmation dialog
    const result = window.confirm("Are you sure you want to delete this user?");
    if (!result) return;
    setOnRequest(true);

    deleteDoc(doc(db, `users/${user?.uid}`))
      .then(() => {
        toast.success("Removed user from DB!", {
          position: "bottom-left",
          autoClose: 3900,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            fontFamily: "Arial",
            fontSize: "17px",
            fontWeight: "bold",
            color: "#4CAF50",
            borderRadius: "5px",
            paddingLeft: "10px",
          },
        });
      })
      .catch((error) => {
        toast.error("Error in Removing the user .", {
          position: "bottom-left",
          autoClose: 3900,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            fontFamily: "Arial",
            fontSize: "15px",
            fontWeight: "bold",
            color: "red",
            borderRadius: "5px",
            padding: "10px",
          },
        });
      });

    setOnRequest(false);
  };

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
                      src={user?.photoURL}
                      alt={index}
                      className="avatar-image"
                    />
                  ) : null}

                  {user.displayName}
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt.toDate().toLocaleString()}</td>
                <td>
                  <div className="buttons">
                    <LoadingButton
                      variant="contained"
                      sx={{
                        marginTop: 1,

                        backgroundColor: "#007FFF",
                        "&:hover": {
                          backgroundColor: "#00308F",
                        },
                      }}
                      loading={onRequest}
                    >
                      Block
                    </LoadingButton>
                    <LoadingButton
                      variant="contained"
                      sx={{
                        marginTop: 1,
                        backgroundColor: "#c62828",
                        "&:hover": {
                          backgroundColor: "red",
                        },
                      }}
                      loading={onRequest}
                      onClick={() => deleteUser(user)}
                    >
                      Delete User
                    </LoadingButton>
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
  th:nth-child(5) {
    padding-left: 70px;
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
    gap: 10px;
    display: flex;
  }
`;
export default MyTable;
