import React from 'react';
import styled from 'styled-components';

import Header from './Header';

// wrapper components
const Wrapper = styled.div`
  margin-top: 64px;
  height: calc(100% - 64px);
  width: 100%;

  @media (min-width: 700px) {
    display: flex;
    flex: auto;
    flex-direction: column;
  }
`;

const Main = styled.main`
  width: 100%;
  padding: 1em;
  margin: 0 20px;

  @media (min-width: 700px) {
    margin: 0 60px;
    flex: 1;
    height: calc(100% -64px);
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <Main>{children}</Main>
      </Wrapper>
    </>
  );
};

export default Layout;
