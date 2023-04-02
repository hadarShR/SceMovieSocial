import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../scss/button.scss";

const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

export const OutlineButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </Button>
  );
};

export const LoginButton = ({ content }) => {
  return <StyledButton>{content}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #14163c;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  font-size: 0.8rem;
  cursor: pointer;
  background-color: #f57c00;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #ffa000;
  }
`;

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
