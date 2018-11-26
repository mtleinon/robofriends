import React, {Component} from 'react';
import {CardList} from "../Components/CardList";
import {SearchBox} from '../Components/SearchBox';
import './App.css';
import { Scroll } from '../Components/Scroll';
import {ErrorBoundry} from "./ErrorBoundry";

export class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange= (event) => {
        this.setState({searchField: event.target.value});
    };


    render() {
        if (this.state.robots.length === 0) {
            return <h2>Loading robots ...</h2>
        } else {
            const filteredRobots = this.state.robots.filter(robot =>
                robot.name.toLowerCase().includes(this.state.searchField));
            return <div className='tc'>
                <h1 className='f1'>Robot friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>;
        }
    }
}