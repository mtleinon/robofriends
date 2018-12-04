import React from 'react';
import { shallow } from 'enzyme';
import CounterButton  from './CounterButton';

it('expect to render CounterButton component', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot()
});

it('Correctly increments the counter', () => {
   const mockColor = 'red';
   const wrapper = shallow(<CounterButton color={mockColor}/>);
   wrapper.find('[id="counter"]').simulate('click');
   expect(wrapper.state()).toEqual({count:1});
});

it('Correctly sets color property', () => {
   const mockColor = 'red';
   const wrapper = shallow(<CounterButton color={mockColor}/>);
   wrapper.find('[id="counter"]').simulate('click');
   expect(wrapper.props().color).toEqual('red');
});