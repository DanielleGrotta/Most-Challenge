import React from 'react';
import Icon1 from '../../images/crud2.svg';
import Icon2 from '../../images/crud1.svg';
import Icon3 from '../../images/shop.svg';
import { 
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP 
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
    <ServicesH1>Projetos</ServicesH1>
      <ServicesWrapper >
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>CRUD 2.0</ServicesH2>
          <ServicesP>Feito com React e Node</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>CRUD 1.0</ServicesH2>
          <ServicesP>Feito com JS e PHP</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Online Shopping</ServicesH2>
          <ServicesP>Em progress</ServicesP>
        </ServicesCard>
      </ServicesWrapper >
    </ServicesContainer>
  )
}

export default Services