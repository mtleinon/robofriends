import React from 'react';
import { shallow } from 'enzyme';
import MainPage  from './MainPage';


let wrapper;
let mockProps;
beforeEach (() => {

    mockProps = {
        onRequestRobots: jest.fn,
        robots: [{
            id: 1,
            name: 'John',
            email: 'john@gmail.com'
        },
        {
            id: 2,
            name: 'Jane',
            email: 'jane@gmail.com'
        },
        {
            id: 3,
            name: 'Lisa',
            email: 'lisa@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    };
    wrapper = shallow(<MainPage { ...mockProps}/>);

});

it('MainPage is rendered', () => {
    expect(wrapper).toMatchSnapshot();
});

it('MainPage is rendered when isPending is true', () => {
    const wrapper2 = shallow(<MainPage { ...mockProps} isPending={true}/>);
    expect(wrapper2).toMatchSnapshot();
});

it('filterRobots works, a robot found', () => {
    expect(wrapper.instance().filteredRobots()).toEqual([{
        id: 1,
        name: 'John',
        email: 'john@gmail.com'
    }]);
});

it('filterRobots works, a robot not found', () => {
    const wrapper2 = shallow(<MainPage { ...mockProps} searchField={'aa'}/>);

    expect(wrapper2.instance().filteredRobots()).toEqual([]);
});
it('filterRobots works, two robots are found', () => {
    const wrapper2 = shallow(<MainPage { ...mockProps} searchField={'J'}/>);

    expect(wrapper2.instance().filteredRobots()).toEqual([{
        id: 1,
        name: 'John',
        email: 'john@gmail.com'
    },
    {
        id: 2,
        name: 'Jane',
        email: 'jane@gmail.com'
    }]);
});
