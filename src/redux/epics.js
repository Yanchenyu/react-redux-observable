/**
 * @description rootEpic
 * @author yan_cy@Ctrip.com
 */

import * as ActionTypes from './ActionTypes';
import { combineEpics } from 'redux-observable';
import {
    addNumbers,
    addNumbersDelay
} from './actions';
import {filter, delay, map, tap, flatMap, of, concat} from 'rxjs/operators';

const addNumberDelay = (action$) => 
    action$.ofType(ActionTypes.ADD_NUMBERS_DELAY)
    .pipe(
        filter(val => val.payload),
        delay(1000),
        map(addNumbers)
    )

const addNumber = (action$, store) => 
    action$.ofType(ActionTypes.ADD_NUMBERS)
    .pipe(
        filter(() => store.getState().number === 2),
        map(() => addNumbersDelay(false))
    )
    

export default combineEpics(
    addNumberDelay,
    addNumber
)
    
