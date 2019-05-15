import React from 'react';
import { getHouses } from 'got-api-lib';

export const withService = Component => props => <Component withService={getHouses} {...props} />;
