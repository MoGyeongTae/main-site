import React from 'react';
import { createGlobalStyle } from 'styled-components';
import BackgroundImage from '@/images/background.jpg';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  width:100%;
  min-height:100vh;
  background-image:url('background.jpg');
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    width:100%;
  }
  & * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style:none;
    text-decoration:none;
  }
`


const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      {children}
    </Container>
  )
}

export default Layout