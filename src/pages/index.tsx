import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Layout from '../components/Layout';

const Container = styled.div`
  
`;

const Main: React.FC = () => (
  <Layout>
    <Container>
      <Header />
    </Container>
  </Layout>
);

export default Main;
