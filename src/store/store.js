import rootReducer from '../reducer';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {logger} from 'redux-logger';


const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,logger
    )
);

export default store;