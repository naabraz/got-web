import React from 'react';
import renderer from 'react-test-renderer';
// import { mount } from 'enzyme';

import { Home } from './Home';

describe('Home screen', () => {
  it('Should match snapshot', () => {
    const houses = [{ name: 'Targaryen', id: 1 }, { name: 'Stark', id: 2 }];
    const HomeScreen = renderer.create(<Home houses={houses} />).toJSON();
    expect(HomeScreen).toMatchSnapshot();
  });

  // it('Should call API to get all houses', async () => {
  //   const houses = [{ name: 'Targaryen', id: 1 }, { name: 'Stark', id: 2 }];

  //   const component = mount(<Home houses={houses} />);

  //   setImmediate(() => {
  //     component.update();
  //     expect(props.withService).toHaveBeenCalled();
  //   });
  // });
});
