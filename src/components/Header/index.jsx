import React from "react";
import { HeaderContainer, Nav, NavItem, NavList, StyledLink } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <NavItem>
            <StyledLink to="/">Home</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/catalog">Catalog</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
