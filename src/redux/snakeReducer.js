import { MOVE_SNAKE_RIGHT, MOVE_SNAKE_LEFT, STOP_TIMER } from './types';

const initState = {
    step: 50,

    coor: {
        left: 50,
        top: 50
    },

    pieces: [{ id: 0 }, { id: 1 }, { id: 2 }],

}

const snakeReducer = (state = initState, action) => {

    switch (action.type) {
        case MOVE_SNAKE_RIGHT:
            return {
                ...state,
                coor: {
                    ...state.coor,
                    left: state.coor.left + state.step
                }
            }

        case MOVE_SNAKE_LEFT:
            return {
                ...state,
                coor: {
                    ...state.coor,
                    left: state.coor.left - state.step
                }
            }

        default:
            return state;
    }
}

export default snakeReducer;

export let moveSnakeRight = () => ({ type: MOVE_SNAKE_RIGHT })
export let moveSnakeLeft = () => ({ type: MOVE_SNAKE_LEFT })
export let stopTimer = () => ({ type: STOP_TIMER })

export const moveSnake = direction => dispatch => {

    switch (direction) {
        case 'right':
            timer.init( dispatch, moveSnakeRight );
            break;
        case 'left':
            timer.init( dispatch, moveSnakeLeft );
            break;
    }
}

const timer = {
    init: (dispatch, actionCreate) => setInterval( () => dispatch(actionCreate()), 1000) 
}



