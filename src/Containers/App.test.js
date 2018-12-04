import React from 'react';

import { mapStateToProps, mapDispatchToProps } from './App';
import {CHANGE_SEARCH_FIELD} from "../Components/constants";
import {shallow} from "enzyme/build";
import {App} from "./App";

describe('App', () => {

    it('expect to render App component', () => {
        expect(shallow(<App />)).toMatchSnapshot()
    });

    it('Should show initial state', () => {
        const initialState = {
            searchRobots: {
                searchField: ''
            },
            requestRobots: {
                robots: [],
                isPending: false,
                error: ''
            }
        };
        expect(mapStateToProps(initialState).searchField).toEqual('');
        expect(mapStateToProps(initialState).robots).toEqual([]);
        expect(mapStateToProps(initialState).isPending).toEqual(false);
        expect(mapStateToProps(initialState).error).toEqual('');
    })

    it('Should set search field', () => {
        const dispatch = jest.fn();

        mapDispatchToProps(fetch)(dispatch).onSearchChange(
            {target: {value: 'a'}}
        );
        console.log('dispatch.mock.calls', dispatch.mock.calls);
        expect(dispatch.mock.calls[0][0]).toEqual(
            {
                type: CHANGE_SEARCH_FIELD,
                payload: 'a'
            });
    })

    it('Should request robots asynchronously', () => {
        const dispatch = jest.fn();
        const fn = jest.fn();
        mapDispatchToProps(fn)(dispatch).onRequestRobots();
        // requestRobots is tested in actions.test.js
        expect(dispatch.mock.calls[0][0]).toEqual(expect.any(Function));
    })
});