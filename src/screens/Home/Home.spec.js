import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Home } from './Home';
import { GotTitle, GotList } from '../../components';

describe('Home screen', () => {
  it('Should match snapshot', () => {
    const houses = [{ name: 'Targaryen', id: 1 }, { name: 'Stark', id: 2 }];
    const HomeScreen = renderer.create(<Home houses={houses} />).toJSON();
    expect(HomeScreen).toMatchSnapshot();
  });

  it('Should render houses array', async () => {
    const houses = [{ name: 'Targaryen', id: 1 }, { name: 'Stark', id: 2 }];

    const component = shallow(<Home houses={houses} />);

    expect(component.find(GotTitle).at(0).props()).toEqual({ title: 'Game of Thrones' });
    expect(component.find(GotList).at(0).props()).toEqual({ houses });
  });
});
