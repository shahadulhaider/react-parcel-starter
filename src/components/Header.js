import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { FaFreeCodeCamp } from 'react-icons/fa';

import Menu from './Menu';

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  height: 64px;
  width: 100%;
  overflow: hidden;
  padding: 0.5em 2em;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  background-color: transparent;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 2em;
    width: 2em;
    fill: green;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;

const LogoText = styled.div`
  margin: 0 0.5em;
  margin-bottom: 0.2em;
  padding: 0;
  font-size: 1.8em;
  font-weight: 500;
  color: #333;
`;

const Header = () => {
  return (
    <HeaderBar>
      <Logo>
        <Link to='/'>
          <FaFreeCodeCamp />
        </Link>
        <LogoText>Logo</LogoText>
      </Logo>
      <Menu />
    </HeaderBar>
  );
};

export default withRouter(Header);
