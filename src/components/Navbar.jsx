import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Navbar = () => {

  const { user, logOut } = UserAuth();

  const navigate = useNavigate();

  const handlesSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } 
    catch (error) {
      console.log(error)
    }
  }

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
              <a href="/movie">Movie</a>
            </li>
            <li>
              <a href="/tv">TV</a>
            </li>
            <li>
              <a href="/search">Search</a>
            </li>
            <li>
              <a href="/contact">Contact-us</a>
            </li>
            <li>
              <a href="/aboutus">About-us</a>
            </li>
          </ul>
        </div>

        {user?.displayName? (
          <button onClick={handlesSignOut}>
          Sign Out
        </button>
        ):(
          <button>
          <Link to="/login">Sign in</Link>
        </button>
        )}

        
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  font-size: 20px;
  font-weight: 600;
  background-image: linear-gradient(
    260deg,
    rgb(42, 244, 152, 1) 0%,
    #3498db 100%
  );
  justify-content: space-between;
  padding-left: 2rem;
  z-index: 10;

  .brand {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .pages {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0;
      padding: 0;

      li {
        margin: 0.5rem;

        a {
          padding: 0.5rem;
          border-radius: 0.5rem;
          text-decoration: none;
          color: #333;

          &:hover {
            background-color: #333;
            color: #fff;
          }
        }
      }
    }
  }

  button {
    background-color: #333;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    margin-top: 1rem;

    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-right: 24px;
    font-weight: 499;
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
  .brand {
    padding-right: 4rem;

    .container {
      cursor: pointer;
      gap: 0.4rem;
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
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .brand {
      margin-bottom: 0;
    }

    .pages {
      ul {
        li {
          margin: 0;

          a {
            padding: 0.5rem 1rem;
          }
        }
      }
    }

    button {
      margin-top: 0;
    }
  }
`;

export default Navbar;
