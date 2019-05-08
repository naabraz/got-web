import React from 'react';

export const getHouses = () => fetch('https://api.got.show/api/book/houses')
  .then(res => res.json())
  .then(data => data)
  .catch(e => new Error(e));

export const withService = Component => props => <Component withService={getHouses} {...props} />;
