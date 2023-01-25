import React from 'react';
import { NavbarContainer, InnerContainer, Logo } from './Styles/Navbar.styled';

export const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <InnerContainer>
          <Logo to="/"></Logo>
          <div className="display:flex justify-content:flex-end"></div>
        </InnerContainer>
      </NavbarContainer>
    </>
  );
};
