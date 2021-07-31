import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height:50px;
  width:100%;
  background-color:#05181f;
  position:fixed;
  top:0;
  left:0;
  z-index:99;
`;

const HeaderMargin = styled.div`
  height:50px;
  width:100%;
`;

const Header: React.FC = () => {
  return (
    <>
      <Container />
      <HeaderMargin />
    </>
  )
}

export default Header;