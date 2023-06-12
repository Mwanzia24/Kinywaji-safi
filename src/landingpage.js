import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #61dafb;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const LandingPage = () => {
  return (
    <Container>
      <Heading>Kinywaji Safi Drink Tracker</Heading>
      <Description>
        Welcome to Kinywaji Safi Drink Tracker! Keep track of your favorite drinks and discover new ones.
      </Description>
      <Button>Get Started</Button>
    </Container>
  );
};

export default LandingPage;
