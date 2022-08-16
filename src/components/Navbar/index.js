import React, { useEffect, useState } from 'react'
import { FaBars, FaPenNib } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
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
    const [scrollNav, setScrollNav] = useState(false);


    const changeNav = () => {
      if(window.scrollY >= 80) {
        setScrollNav(true);
    }
    else {
        setScrollNav(false);
    }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
      scroll.scrollToTop();
    };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' src={logo} onClick={toggleHome}></NavLogo>
          <MobileIcon  onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem >
              <NavLinks to="about" smooth={true} duration={500} spy={true}  exact='true' offset={30} >Sobre</NavLinks>
            </NavItem>
            <NavItem >
              <NavLinks to="discover" smooth={true} duration={500} spy={true}  exact='true' offset={30} >Descubra</NavLinks>
            </NavItem>
            <NavItem >
              <NavLinks to="services" smooth={true} duration={500} spy={true}  exact='true' offset={30} >Projetos</NavLinks>
            </NavItem>
            <NavItem >
              <NavLinks to="signup" smooth={true} duration={500} spy={true}  exact='true' offset={30} >Entre em Contato</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink onClick={()=> window.open(pdf)}> <span>Curriculum</span> <FaPenNib /></NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar
