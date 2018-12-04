import React, {Component} from 'react';
import { connect } from 'react-redux';

import {requestRobots, setSearchField} from "../Components/actions";
import MainPage from "../Components/MainPage";

export const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
};

export const mapDispatchToProps = (fetch2) =>(dispatch) => {
    return {
        onSearchChange: (event) =>
                dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots(fetch2))
    }
};

export class App extends Component {

    render = () =>
        <MainPage { ...this.props } />;

}

export default connect(mapStateToProps, mapDispatchToProps(fetch))(App);