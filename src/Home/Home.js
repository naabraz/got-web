import React, { useEffect } from 'react';

import {
  Container,
  Title,
} from './Home.styles';

export const Home = ({ withService }) => {
  const callService = async () => {
    withService();
  };

  useEffect(() => {
    callService();
  }, []);

  return (
    <Container>
      <Title>
        Game of Thrones
      </Title>
    </Container>
  );
};
