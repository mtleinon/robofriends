import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from "./constants";

import * as reducers from './redusers';

describe('Should return initial state', () => {
    const initialStateSearch  = {
        searchField: ''
    };

    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, undefined)).toEqual({searchField: ''});
        expect(reducers.searchRobots(initialStateSearch, {})).toEqual({searchField: ''});
    });
    it('with searchField', () => {
        expect(reducers.searchRobots(undefined,
            {
                type: CHANGE_SEARCH_FIELD,
                payload: 'abc'
            })).toEqual(
                {
                    searchField: 'abc'
                });
    });
});

describe('StateRobots', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ''
    };
    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, undefined))
            .toEqual(initialStateRobots);
        expect(reducers.requestRobots(initialStateRobots, {}))
            .toEqual(initialStateRobots);
    });
    it('should return the pending state', () => {
        expect(reducers.requestRobots(undefined, {
            type: REQUEST_ROBOTS_PENDING
        }))
            .toEqual({ ...initialStateRobots, isPending: true});
    });
    it('should return the success state', () => {
        expect(reducers.requestRobots(undefined, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{name: 'a'}]
        }))
            .toEqual({ ...initialStateRobots, isPending: false,
                    robots: [{name: 'a'}]});
    });
    it('should return the error state', () => {
        expect(reducers.requestRobots(undefined, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'test'
        }))
            .toEqual({ ...initialStateRobots,
                isPending: false,
                error: 'test'});
    });
});

