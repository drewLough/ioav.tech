import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";

import { Home, Links, Info, Contact, Error } from "./Pages";

/* Style Components */

const AppStyle = styled.div``;

const HeaderStyle = styled.div``;

const Title = styled(Link)``;

const MainStyle = styled.div``;

const FooterStyle = styled.div``;

/* Structure Components */

export const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Title to="/">io.av</Title>
      <Link to="/links">Links</Link>
      <Link to="/info">Info</Link>
      <Link to="/contact">Contact</Link>
    </HeaderStyle>
  );
};

export const Main: React.FC = () => {
  return (
    <MainStyle>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<Error />} />
      </Routes>
    </MainStyle>
  );
};

export const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <p>© 2024, 0.4.3</p>
    </FooterStyle>
  );
};

export const App: React.FC = () => {
  return (
    <AppStyle>
      <Header />
      <Main />
      <Footer />
    </AppStyle>
  );
};
