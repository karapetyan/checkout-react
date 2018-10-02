import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export const store = createStore(
        rootReducer, 
            window.navigator.userAgent.includes('Chrome') ?
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
                    : undefined
);