import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const NavItem = styled.li``;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #ddd;
  }
`;
