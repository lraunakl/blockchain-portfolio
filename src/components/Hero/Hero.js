import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

function openResumeNewTab(){
  const url = 'https://drive.google.com/file/d/1mT4mCDZ_30gpXaOwu92O__G1gF1kelDm/view?usp=share_link';
  window.open(url, '_blank');
}
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          SOFTWARE <br />
          DEVELOPMENT
        </SectionTitle>
        <SectionText>
        SOFTWARE TECHNOLOGY DEVELOPMENT <br /> BLOCKCHAIN | AI | MOBILE APP
        </SectionText>
        <Button onClick={openResumeNewTab}>PROPOSAL</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;