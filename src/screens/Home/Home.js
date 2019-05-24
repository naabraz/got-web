// @flow
import React from 'react';

import { GotContainer, GotTitle, GotList } from '../../components';

type Props = {
  houses: Array<Object>
}

export const Home = ({ houses }: Props) => (
  <GotContainer>
    <GotTitle title="Game of Thrones" />
    <GotList houses={houses} />
  </GotContainer>
);
