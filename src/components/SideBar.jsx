import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <StyledSection>
      <div
        className="sidebar"
        style={{
          backgroundColor: "#282c34",
          color: "#ffffff",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0,
          width: 200,
          zIndex: 1,
        }}
      >
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
          <li style={{ padding: 16 }}>Dashboard</li>
          <li style={{ padding: 16 }}>Users</li>
          <li style={{ padding: 16 }}>Orders</li>
          <li style={{ padding: 16 }}>Settings</li>
        </ul>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  .sidebar {
    background-color: #282c34;
    color: #ffffff;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    z-index: 1;
  }

  .sidebar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .sidebar li {
    padding: 16px;
  }

  .sidebar li:hover {
    background-color: #555;
  }

  .sidebar li.active {
    background-color: #4caf50;
  }
`;

export default SideBar;
