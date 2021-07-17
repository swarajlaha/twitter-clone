import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../components/logo';

const LogoContainer = () => {
  return (
    <>
      <Container className="ml-5 mt-3">
        <Logo />
      </Container>
    </>
  );
};

export default LogoContainer;