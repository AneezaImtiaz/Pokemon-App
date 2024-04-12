import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #a0c9d7;
  width: 100%;
  position: sticky;
  top: 0;
`;

export const Title = styled.h1`
  text-align: center;
  color: #ffffff;
  padding-top: 30px;
  width: 100%;
  font-size: 2em;
  padding-bottom: 30px;
`;

export const Navbar = styled.nav`
  background-color: #3e3f3f;
  overflow: hidden;
`;

export const NavbarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const NavbarItem = styled.li`
  display: inline-block;
  font-size: 1.2em;
  padding: 15px;
`;

export const NavbarLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: #a0c9d7;
  }
`;