import React, {useState} from 'react';
import Video from '../../videos/video9.mp4';
import {Button} from '../ButtonElements';
import { 
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
  } from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Bem-vindo!</HeroH1>
        <HeroP>
          Este é um de meus sites de exemplo, onde eu falo sobre alguns projetos que eu faço.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='about' smooth={true} duration={500} spy={true} exact='true' offset={30} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Começar {hover ?  <ArrowRight /> : <ArrowForward />  }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
