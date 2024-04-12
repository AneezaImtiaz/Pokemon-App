import React from 'react';
import { APP_TITLE, ROUTES } from '../../utils/Constants';
import { HeaderContainer, Title, Navbar, NavbarList, NavbarItem, NavbarLink } from '../../styles/HeaderStyles';

const Header: React.FC = () => {

  return (
    <HeaderContainer>
      <Title>{APP_TITLE}</Title>
      <Navbar>
        <NavbarList>
          <NavbarItem>
            <NavbarLink href="/">{ROUTES.home}</NavbarLink>
          </NavbarItem>
        </NavbarList>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
