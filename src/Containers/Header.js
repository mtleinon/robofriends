import {Component} from "react";
import React from "react";

import { CounterButton } from './CounterButton';

export class Header extends Component {

    shouldComponentUpdate = (nextProps, nextState) => false;

    render() {
        console.log('Header');
        return (
            <div>
                <h1 className='f1'>Robot friends</h1>
                <CounterButton/>
            </div>);
    }
}
