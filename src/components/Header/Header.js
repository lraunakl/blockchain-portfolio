import Link from 'next/link';
import React from 'react';
import Head from "next/head"
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  
  <Container>
  
    <Head>
      <link rel="shortcut icon" href="/rocket.png" />
      <title> Chainet </title>
    </Head>
  
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <SiEthereum size="3rem" /> <span>CHAINET</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>🚀PORFOLIO</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>👨‍💻TECH SERVICES</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>📃CONTACT US</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/ShivaShanmuganathan/">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/lraunakl">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com">
          <AiFillTwitterCircle size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
