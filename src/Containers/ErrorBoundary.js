import React, { Component } from 'react';

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    componentDidCatch (error, info) {
        this.setState({error: true});
    }

    render() {
        if (this.state.error) {
            return <h2>Oops an error happened!!</h2>
        }
        return this.props.children;
    }
}