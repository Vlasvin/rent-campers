import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "components/Header";

import { LayoutWrapper } from "./styled";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        {children}
        <Outlet />
      </Suspense>
    </LayoutWrapper>
  );
};

export default Layout;
