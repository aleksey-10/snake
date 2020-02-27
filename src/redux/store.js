import { createStore, combineReducers, applyMiddleware } from "redux";
import snakeReducer from './snakeReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
    snake: snakeReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;