import React, { useEffect, useState } from 'react';

import {
  Container,
  Title,
} from './Home.styles';

export const Home = ({ withService }) => {
  const [houses, housesSet] = useState(false);

  const callService = async () => {
    const response = withService();
    housesSet(response);
  };

  useEffect(() => {
    callService();
  });

  return (
    <Container>
      <Title>Game of Thrones</Title>
    </Container>
  );
};
