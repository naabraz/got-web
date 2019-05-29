import React from 'react';
import renderer from 'react-test-renderer';
// import { mount } from 'enzyme';
import { getHouses } from 'got-api-lib';

import { HomeContainer } from './Home.container';

jest.mock('got-api-lib');

describe('Home Container', () => {
  it('Should match snapshot', () => {
    const Container = renderer.create(<HomeContainer />).toJSON();
    expect(Container).toMatchSnapshot();
  });

  it('Should call service', async () => {
    // mount(<HomeContainer />);

    getHouses.mockImplementation(() => [{ name: 'Targaryen', id: 1 }, { name: 'Stark', id: 2 }]);
  });
});
