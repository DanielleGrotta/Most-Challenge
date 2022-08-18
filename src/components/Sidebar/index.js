import React from 'react';
import pdf from '../../assets/CV.pdf';
import { FaPenNib } from 'react-icons/fa';
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about"    onClick={toggle}>Sobre   </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>Descubra </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Projetos </SidebarLink>
          <SidebarLink to="signup"   onClick={toggle}>Entre em Contato </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick={()=> window.open(pdf)}>Curriculum<FaPenNib /></SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
