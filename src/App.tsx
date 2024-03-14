import React from "react";
import {
  Route,
  Routes,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

import styled from "styled-components";

/* Style Components */

const Theme = {
  // Colors
  primary: "#333333",
  primary_variant: "#0c0c0c",
  secondary: "#d6d6d6",
  secondary_variant: "#868686",
  background: "#000000",
  surface: "#ffffff",
  error: "#b12d3a",
  // Typography
  on_primary: "#f5f5f5",
  on_secondary: "#000000",
  on_background: "#eeeeee",
  on_surface: "#000000",
  on_error: "#ffffff",
};

const AppStyle = styled.div``;

const HeaderStyle = styled.div`
  display: grid;
  column-gap: 50px;
  grid-template-columns: 1fr;
`;

const Title = styled(Link)``;

const HeadLink = styled(Link)<{ isActive?: boolean }>``;

const SubNavStyle = styled.div``;

const SubNavLinkStyle = styled(Link)<{ isActive?: boolean }>`
  color: ${Theme.on_primary};
  text-decoration: none;
  background-color: ${(props) =>
    props.isActive ? Theme.secondary : Theme.primary};
`;

const SocialLink = styled(Link)`
  display: block;
`;

const MainStyle = styled.div``;

const FooterStyle = styled.div``;

const PageStyle = styled.div``;

/* Structure Components */

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Title to="/">io.av</Title>
      <HeadLink to="/links">Links</HeadLink>
      <HeadLink to="/info">Info</HeadLink>
      <HeadLink to="/contact">Contact</HeadLink>
    </HeaderStyle>
  );
};

const Shoulder: React.FC = () => {
  return <div>animation here</div>;
};

const InfoNav: React.FC = () => {
  return (
    <SubNavStyle>
      <SubNavLink to="/about">About</SubNavLink>
      <SubNavLink to="/faq">FAQ</SubNavLink>
      <SubNavLink to="/upcoming">Upcoming</SubNavLink>
    </SubNavStyle>
  );
};

const SubNavLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <SubNavLinkStyle to={to} isActive={!!match}>
      {children}
    </SubNavLinkStyle>
  );
};

const Main: React.FC = () => {
  return (
    <MainStyle>
      <Shoulder />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<Error />} />
      </Routes>
      <Shoulder />
    </MainStyle>
  );
};

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <p>© 2024, 0.4.3</p>
    </FooterStyle>
  );
};

const Home: React.FC = () => {
  return (
    <PageStyle>
      <h2>io.av</h2>
      <h2>boolean expressions</h2>
    </PageStyle>
  );
};

const Links: React.FC = () => {
  return (
    <PageStyle>
      <SocialLink to="https://soundcloud.com/ioav">soundcloud</SocialLink>
      <SocialLink to="https://www.instagram.com/io.av">instagram</SocialLink>
      <SocialLink to="https://www.youtube.com/channel/UCyzhXHSm_uYPOIiuLr26cyw">
        youtube
      </SocialLink>
      <SocialLink to="https://ioav.bandcamp.com/">bandcamp</SocialLink>
      <SocialLink to="https://www.openprocessing.org/user/67166">
        openprocessing
      </SocialLink>
      <SocialLink to="https://www.facebook.com/io.audiovisual">
        facebook
      </SocialLink>
      <SocialLink to="https://twitter.com/io_audiovisual">twitter</SocialLink>
    </PageStyle>
  );
};

//
const Info: React.FC = () => {
  return (
    <PageStyle>
      <InfoNav />
    </PageStyle>
  );
};

const Contact: React.FC = () => {
  return (
    <PageStyle>
      <h2>all the ways people can reach me</h2>
      <h2>discord</h2>
      <Link to="mailto:inquiries@ioav.tech"> email me </Link>
    </PageStyle>
  );
};

const Error: React.FC = () => {
  return (
    <PageStyle>
      <h2>Error, Page Not Found!</h2>
    </PageStyle>
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
