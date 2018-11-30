import React, {Component} from 'react';
import { connect } from 'react-redux';
import { CardList } from "../Components/CardList";
import { SearchBox } from '../Components/SearchBox';
import { Scroll } from '../Components/Scroll';
import { ErrorBoundary } from "./ErrorBoundary";
import './App.css';

import {requestRobots, setSearchField} from "../Components/actions";
import {Header} from "./Header";

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) =>
                dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
};

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;

        if (isPending || robots.length === 0) {
            return(<div className='tc'>
                        <Header/>
                        <h2>Loading robots ...</h2>
                   </div>);
        } else {
            const filteredRobots = robots.filter(robot =>
                    robot.name.toLowerCase().includes(searchField.toLowerCase()));
            return <div className='tc'>
                <Header/>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);