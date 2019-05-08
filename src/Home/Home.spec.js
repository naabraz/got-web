import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Home } from './Home';

describe('Home screen', () => {
  const props = {
    getHouses: jest.fn().mockImplementation(() => []),
  };

  it('Should match snapshot', () => {
    const HomeScreen = renderer.create(<Home {...props} />).toJSON();
    expect(HomeScreen).toMatchSnapshot();
  });

  it('Should call API to get all houses', () => {
    shallow(<Home {...props} />).update();

    expect(props.getHouses).toHaveBeenCalled();
  });
});
