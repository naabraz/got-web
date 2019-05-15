// @flow
import React, { useEffect } from 'react';

import {
  Container,
  Title,
} from './Home.styles';

type Props = {
  withService: Object
}

export const Home = ({ withService }: Props) => {
  useEffect(() => {
    const callService = async () => {
      withService();
    };

    callService();
  }, [withService]);

  return (
    <Container>
      <Title>
        Game of Thrones
      </Title>
    </Container>
  );
};
