import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout