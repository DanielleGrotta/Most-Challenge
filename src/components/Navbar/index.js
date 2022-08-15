import React from 'react'
import { FaBars } from 'react-icons/fa';
import logo from '../../images/logo.svg';
import pdf from '../../assets/CV.pdf';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' src={logo}></NavLogo>
          <MobileIcon  onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem >
              <NavLinks to="about">Sobre</NavLinks>
            </NavItem>
            <NavItem >
              <NavLinks to="discover">Descubra</NavLinks>
            </NavItem>
            <NavItem >
              <NavLinks to="services">Projetos</NavLinks>
            </NavItem>
            <NavItem >
              <NavLinks to="signup">Entre em Contato</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={()=> window.open(pdf)}> <span>Curriculo</span> <FaBars /></NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar
