import React, { useEffect, useState } from 'react';
import { getHouses } from 'got-api-lib';

import { Home } from './Home';

export const HomeContainer = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const callService = async () => {
      const items = await getHouses();
      await setHouses(items);
    };

    callService();
  });

  return (
    <Home houses={houses} />
  );
};
