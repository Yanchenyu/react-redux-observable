/**
 * @description redux reducer
 * @author yan_cy@Ctrip.com
 */

import { combineReducers } from 'redux';
import * as ActionTypes from './ActionTypes';

// 加减
const number = (state = 0, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NUMBERS:
            return state + 1
        case ActionTypes.MINUS_NUMBERS:
            return state - 1
        default:
            return state
    }
};

const isLoading = (state = false, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NUMBERS_DELAY:
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    number,
    isLoading
});

export default rootReducer
