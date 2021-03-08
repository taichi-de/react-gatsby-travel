import { Link } from "gatsby"
import styled from "styled-components"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#F26A3E" : "#077BF1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  border-radius: ${({ round }) => (round ? "50px" : "none")};
  &:hover {
    background: ${({ primary }) => (primary ? "#077BF1" : "#F26A3E")};
    transform: translateY(-2px);
  }
`
