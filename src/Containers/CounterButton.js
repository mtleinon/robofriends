import {PureComponent} from "react";
import React from "react";

export class CounterButton extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    updateCount = () => {
        this.setState(state => ({count: state.count + 1}) );
    };

    render() {
        console.log('CounterButton');
        return (
            <button onClick={this.updateCount}
                    color={this.props.color}>
                {this.state.count}
            </button>
        )
    }
}
