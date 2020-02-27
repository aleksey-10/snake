import { createStore, combineReducers, applyMiddleware } from "redux";
import snakeReducer from './snakeReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import scoreReducer from "./scoreReducer";

const reducers = combineReducers({
    snake: snakeReducer,
    score: scoreReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;