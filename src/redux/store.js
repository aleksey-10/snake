import { createStore, combineReducers, applyMiddleware } from "redux";
import snakeReducer from './snakeReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    snake: snakeReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;