import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from "./constants";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = (fetch2) => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    return fetch2('https://jsonplaceholder.typicode.com/users')
        .then(response =>
            {
            return response.json();
        })
        .then(data =>
            {
            return dispatch({ type:REQUEST_ROBOTS_SUCCESS, payload: data });
        })
        .catch(error => {
                return dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
        })
};