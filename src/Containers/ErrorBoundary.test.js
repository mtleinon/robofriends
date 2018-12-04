import React from 'react';
import { shallow } from 'enzyme';
import { ErrorBoundary }  from './ErrorBoundary';

it('expect to render ErrorBoundary component', () => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot()
});

it('Correctly handles error in children component', () => {
    const wrapper = shallow(<ErrorBoundary />);
    expect(wrapper.state()).toEqual({error: false});
    wrapper.instance().componentDidCatch(undefined, undefined);
    expect(wrapper.state()).toEqual({error: true});
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot()
});
//
// it('Correctly sets color property', () => {
//     const mockColor = 'red';
//     const wrapper = shallow(<CounterButton color={mockColor}/>);
//     wrapper.find('[id="counter"]').simulate('click');
//     expect(wrapper.props().color).toEqual('red');
// });
