import React, { useEffect } from 'react';

// @flow

import {
  Container,
  Title,
} from './Home.styles';

type Props = {
  withService: Function
}

export const Home = ({ withService }: Props) => {
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
