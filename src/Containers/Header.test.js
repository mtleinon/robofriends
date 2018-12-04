import React from 'react';
import { shallow } from 'enzyme';
import { Header }  from './Header';

it('expect to render Header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot()
});

it('shouldComponentUpdate returns false', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.instance()
            .shouldComponentUpdate(undefined, undefined)).toEqual(false);
});
