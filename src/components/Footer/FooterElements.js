import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #000;
`;

export const FooterWrap = styled.div`
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;


export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.img`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  height: 8rem;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 13px;

  @media screen and (max-width: 760px) {
    margin-bottom: 3rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 32px;

  &:hover {
    color: #b67c37;
    transition: color 0.2s ease-in-out;
  }
`;
