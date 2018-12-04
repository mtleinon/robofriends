import React from 'react';
import { shallow } from 'enzyme';
import { CardList } from './CardList';

it('expect to render Card component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'john',
            email: 'john@gmail.com'
        }
    ];
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
    // console.log('expect to render Card component:',
    //     mount(<Card/>).find('div').hasClass('tc'));
});