import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  margin-top: ${({ theme }) => theme.sizes.padding}px;
  padding: ${({ theme, size }) =>
      size === "xs" ? theme.sizes.padding / 2 : theme.sizes.padding / 1.3}px
    ${({ theme }) => theme.sizes.padding}px;
  background: ${({ theme }) => theme.color.blue};
  color: white;
  border: 0px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.sizes.radius}px;
  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.color.soft.black};
  }
  & + & {
    margin-left: ${({ theme }) => theme.sizes.padding}px;
  }
`;

const Button = ({ children, onClick, size, disabled }) => {
  return (
    <ButtonStyled onClick={onClick} size={size} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
