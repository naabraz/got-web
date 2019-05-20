// @flow
import React from 'react';

import { List, ListItems } from './GotList.style';

type Props = {
  houses: Array<Object>
}

export const GotList = ({ houses }: Props) => (
  <List>
    {houses.map(({ name, id }) => (
      <ListItems key={id}>
        {name}
      </ListItems>
    ))}
  </List>
);
