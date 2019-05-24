// @flow
import React from 'react';

import { Container } from './GotContainer.style';

type Props = {
  children: Object;
}

export const GotContainer = ({ children }: Props) => (
  <Container>
    { children }
  </Container>
);
