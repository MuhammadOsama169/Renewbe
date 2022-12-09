import React from 'react';
import {
  NavbarContainer,
  InnerContainer,
  Logo,
  Button,
} from './Styles/Navbar.styled';

export const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <InnerContainer>
          <Logo to="/"></Logo>
          <Button href="https://www.figma.com/proto/E3m65zgQvW5qVN2c8RdyPK/Renewbe-%40-Muhammad-Osama?node-id=1301%3A290&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1301%3A290&show-proto-sidebar=1">
            Check Out Our Prototype App
          </Button>
        </InnerContainer>
      </NavbarContainer>
    </>
  );
};
