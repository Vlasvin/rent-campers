import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "pictures/img/logo.png";
import headerImg from "pictures/img/headerImg.jpg";

import {
  HeaderContainer,
  LayoutLogo,
  Logo,
  Nav,
  NavItem,
  NavList,
  StyledLink,
} from "./styled";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <HeaderContainer
      style={{
        background: isHomePage ? "transparent" : `url(${headerImg})`,
        backgroundSize: "cover",
        borderBottom: "1px solid rgba(16, 24, 40, 0.3)",
      }}
    >
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
