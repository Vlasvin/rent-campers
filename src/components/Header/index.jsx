import React from "react";

import logo from "pictures/img/logo.png";
import {
  HeaderContainer,
  LayoutLogo,
  Logo,
  Nav,
  NavItem,
  NavList,
  StyledLink,
} from "./styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <LayoutLogo>
        <Link to="/">
          <Logo src={logo} alt="CamperRent" />
        </Link>
      </LayoutLogo>

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
