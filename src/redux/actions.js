/**
 * @description redux action
 * @author yan_cy@Ctrip.com
 */

import * as ActionTypes from './ActionTypes';

export const addNumbers = () => ({
    type: ActionTypes.ADD_NUMBERS
})

export const minusNumbers = () => ({
    type: ActionTypes.MINUS_NUMBERS
})

export const addNumbersDelay = (payload) => ({
    type: ActionTypes.ADD_NUMBERS_DELAY,
    payload
})
