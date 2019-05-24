// @flow
import React from 'react';

import { Title } from './GotTitle.style';

type Props = {
  title: String,
}

export const GotTitle = ({ title }: Props) => (
  <Title>{title}</Title>
);
