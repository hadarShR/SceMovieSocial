import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="brand">
          <a href="/">
            <div className="container">SCE-Movie-Social</div>
          </a>
        </div>

        <div className="pages">
          <ul>
            <li>
              <a href="/">Movie</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/aboutus">About-us</a>
            </li>
          </ul>
        </div>
        <button>
          <Link to="/login">Sign In</Link>
        </button>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  font-size: 20px;
  font-weight: 600;
  background-image: linear-gradient(
    260deg,
    rgb(42, 244, 152, 255) 0%,
    #3498db 100%
  );
  height: 75px;
  display: flex;
  justify-content: space-between;
  padding-left: 2rem;
  z-index: 10;
  align-items: center;

  button {
    display: flex;
    align-items: right;
    margin-right: 24px;
    justify-content: right;
    font-weight: 499;
    margin-left: 35rem;

    @media screen and (max-width: 768px) {
      display: none;
    }
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #023e8a;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }

  h5 {
    transition: 0.3s ease-in-out;
    color: #023e8a;
    font-weight: 2000;
    font-size: 1.1rem;
    justify-content: right;
    display: flex;
    align-items: left;
    padding: 0rem -1rem;
  }
  .brand {
    padding-right: 4rem;

    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.5rem;
      font-weight: 900;
      text-transform: uppercase;
      transition: 0.1s ease-in-out;
      color: white;
      text-decoration: underline;
      &:hover {
        color: #023e8a;
      }
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #ffba08;
        font-size: 1.3rem;
        font-weight: 650;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    h5 {
      display: none;
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

export default Navbar;
