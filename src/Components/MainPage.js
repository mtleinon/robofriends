import React, {Component} from 'react';
import { CardList } from "../Components/CardList";
import { SearchBox } from '../Components/SearchBox';
import { Scroll } from '../Components/Scroll';
import { ErrorBoundary } from "../Containers/ErrorBoundary";
import './MainPage.css';

import {Header} from "../Containers/Header";

class MainPage extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    filteredRobots = () =>
        this.props.robots.filter(robot =>
                robot.name.toLowerCase().includes(
                        this.props.searchField.toLowerCase()));

    render() {
        const { onSearchChange, robots, isPending } = this.props;

        if (isPending || robots.length === 0) {
            return(<div className='tc'>
                <Header/>
                <h2>Loading robots ...</h2>
            </div>);
        } else {
            return <div className='tc'>
                <Header/>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={this.filteredRobots()}/>
                    </ErrorBoundary>
                </Scroll>
            </div>;
        }
    }
}

export default MainPage;