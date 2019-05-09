import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Home } from './Home';

describe('Home screen', () => {
  const props = {
    withService: jest.fn().mockImplementation(() => []),
  };

  it('Should match snapshot', () => {
    const HomeScreen = renderer.create(<Home {...props} />).toJSON();
    expect(HomeScreen).toMatchSnapshot();
  });

  it('Should call API to get all houses', async () => {
    const component = mount(<Home {...props} />);

    setImmediate(() => {
      component.update();
      expect(props.withService).toHaveBeenCalled();
    });
  });
});
