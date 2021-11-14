import React from 'react';
import Icon1 from '../../images/covid.jpg';
//import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/dl.jpg';
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
    <ServicesContainer id='services'>
      <ServicesH1>More Info</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Covid 19</ServicesH2>
          <ServicesP>
           Add something here about Deep Learning
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>About us</ServicesH2>
          <ServicesP>
            Add about us here later
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>More about Deep Learning</ServicesH2>
          <ServicesP>
           Add more about deep learning here
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
