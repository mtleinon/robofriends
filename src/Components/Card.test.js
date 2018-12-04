import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Card } from './Card';

it('expect to render Card component', () => {

    expect(shallow(<Card/>)).toMatchSnapshot();
    // console.log('expect to render Card component:',
    //     mount(<Card/>).find('div').hasClass('tc'));
});