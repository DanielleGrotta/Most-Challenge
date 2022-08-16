import React from 'react'
import { FaGithub,FaLinkedin,FaInstagram } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/logo.svg';
import { 
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialIconLink,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons
} from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer id='footer'>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" src={logo} onClick={toggleHome} ></SocialLogo>
            <WebsiteRights>DG © {new Date().getFullYear()} All rights reserved </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.linkedin.com/in/danielle-grotta-ab8b3520a" target="_blank" arial-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="//www.instagram.com/danielle_grotta/" target="_blank" arial-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="//www.github.com/DanielleGrotta" target="_blank" arial-label="Github">
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer