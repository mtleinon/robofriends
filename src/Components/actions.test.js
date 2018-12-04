import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from "./constants";

import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('Should return set searchField', () => {

    it('should return payload', () => {
        expect(actions.setSearchField('abc')).toEqual({
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        });
    })
});


describe('Handles requestRobots', () => {
    const store = mockStore();

    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve('robot data')
        }));

    it('pending action received', () => {
        store.dispatch(actions.requestRobots(mockFetch));
        expect(store.getActions()[0]).toEqual({
            type: REQUEST_ROBOTS_PENDING
        });
    });

    it('success action received', () => {
        return store.dispatch( actions.requestRobots(mockFetch))
            .then(data => {
                expect(mockFetch.mock.calls.length).toBe(2);
                expect(data).toEqual({type: REQUEST_ROBOTS_SUCCESS,
                    payload: 'robot data'});
            });
    });

    it('failed action received', () => {
        const mockFetch2 = jest.fn()
            .mockReturnValue(Promise.resolve({
                json: () => Promise.reject(new Error('reason for error'))
            }));

        return store.dispatch( actions.requestRobots(mockFetch2))
            .then(data => {
                expect(mockFetch2.mock.calls.length).toBe(1);
                expect(data).toEqual({type: REQUEST_ROBOTS_FAILED,
                    payload: new Error('reason for error')});
            });
    });
});

