/**
 * @description redux store
 * @author yan_cy@Ctrip.com
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const middleware = [epicMiddleware];

if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middleware.push(logger);
}

export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );

    if (module.hot) {
        var acceptCallback = () => {
            store.replaceReducer(rootReducer); 
        }
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', acceptCallback);
        module.hot.acceptCallback = acceptCallback;
    }

    return store
}
