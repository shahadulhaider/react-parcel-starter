import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: transparent;
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 700px) {
    padding: 0 0.5em;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;
  display: flex;
`;

const NavListItem = styled.li`
  margin: 0 1em;
  padding: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:visited {
    color: #333;
  }

  &:active {
    font-weight: 500;
  }

  &:hover,
  &:focus {
    color: ##202020;
    text-decoration: underline;
  }
`;

const Menu = () => {
  // TODO: fetch auth data from state
  const isLoggedIn = false;

  return (
    <Nav>
      <NavList>
        <NavListItem>
          <NavLink to='/'>Home</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to='/about'>About</NavLink>
        </NavListItem>
      </NavList>
      <NavList>
        {isLoggedIn ? (
          <NavListItem>
            <NavLink to='/logout'>Logout</NavLink>
          </NavListItem>
        ) : (
          <>
            <NavListItem>
              <NavLink to='/signin'>Sign In</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to='/signup'>Sign Up</NavLink>
            </NavListItem>
          </>
        )}
      </NavList>
    </Nav>
  );
};

export default Menu;
