import React, { useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Button } from '../ButtonElements';

import Video from '../../videos/video.mp4';
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

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

//   let history = useHistory();
//    const redirect = () => {
//      history.push('./Api')
//    }
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Covid detection using DL algorithms</HeroH1>
        <HeroP>
         The power of deep learning - Upload your image and check the results
        </HeroP>
        <HeroBtnWrapper>
          <Link
            to='/upload'
            //smooth={true}
            //duration={500}
            //spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            // onClick={redirect}
          >
           Upload an image { hover ? <ArrowForward /> : <ArrowRight />}
          </Link>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
