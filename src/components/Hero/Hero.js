import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, Welcome! <br />
        I'm Bhavesh Ittadwar
      </SectionTitle>
      <SectionText>
        I love web development. I’m keen about front-end technologies & advance JavaScript. I'm looking to collaborate around any thing on front-end frameworks (React.js / Vue.js etc), around HTML, css & js.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.google.com' }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;