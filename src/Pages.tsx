import React from "react";
import styled from "styled-components";

/* Style Components */

const Page = styled.div``;

/* Structure Components */

export const Home: React.FC = () => {
  return (
    <Page>
      <h2>io's homepage</h2>
    </Page>
  );
};

export const Links: React.FC = () => {
  return (
    <Page>
      <h2>io's linkhub</h2>
    </Page>
  );
};

export const Info: React.FC = () => {
  return (
    <Page>
      <h2>io's info</h2>
    </Page>
  );
};

export const Contact: React.FC = () => {
  return (
    <Page>
      <h2>all the ways people can reach me</h2>
      <h2>discord </h2>
      <h2>email dropbox</h2>
    </Page>
  );
};

export const Error: React.FC = () => {
  return (
    <Page>
      <h2>Error, Page Not Found!</h2>
    </Page>
  );
};
