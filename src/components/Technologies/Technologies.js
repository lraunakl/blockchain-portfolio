import React from 'react';
import { DiFirebase, DiReact, DiZend, FaEthereum } from 'react-icons/di';
import { SiSolidity } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>TECHNOLOGY STACK🌟</SectionTitle>
    <SectionText>
      We have worked with a range of technologies in the web development world.
      From Backend, FrontEnd To Design.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Portfolio Experience <br />
            React.js & Next.js & Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiSolidity size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience Node.js <br />
            Solidity & Hardhat
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            AdobeXD & Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);


export default Technologies;
