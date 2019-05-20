// @flow
import React from 'react';

import { Container, Title } from './Home.styles';
import { GotList } from '../../components/GotList';

type Props = {
  houses: Array<Object>
}

export const Home = ({ houses }: Props) => (
  <Container>
    <Title>
      Game of Thrones
    </Title>
    <GotList houses={houses} />
  </Container>
);
