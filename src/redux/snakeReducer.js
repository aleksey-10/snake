import { MOVE_SNAKE_RIGHT, MOVE_SNAKE_LEFT, STOP_TIMER, MOVE_SNAKE_DOWN, MOVE_SNAKE_UP } from './types';

const initState = {
    step: 50,
    field: { width: 600, height: 400 },

    pieces: [
        { id: 0, coor: { left: 150, top: 100 } },
        { id: 1, coor: { left: 100, top: 100 } },
        { id: 2, coor: { left: 50, top: 100 } }
    ],

}

const snakeReducer = (state = initState, action) => {
    console.log(state)
    switch (action.type) {
        case MOVE_SNAKE_RIGHT:
            return {
                ...state,
                pieces: state.pieces.map(item => {
                    item.coor.left += state.step
                    return item;
                })
            }

        case MOVE_SNAKE_LEFT:
            return {
                ...state,
                pieces: state.pieces.map(item => {
                    item.coor.left -= state.step
                    return item;
                })
            }

        case MOVE_SNAKE_UP:
            return {
                ...state,
                pieces: state.pieces.map((item, i) => {
                    if (item.id) item.coor = state.pieces[i - 1].coor
                    
                    return item;
                })

            }

        case MOVE_SNAKE_DOWN:
            return {
                ...state,
                pieces: state.pieces.map(item => {
                    item.coor.top += state.step
                    return item;
                })
            }

        default:
            return state;
    }
}

export default snakeReducer;

export let moveSnakeRight = () => ({ type: MOVE_SNAKE_RIGHT })
export let moveSnakeLeft = () => ({ type: MOVE_SNAKE_LEFT })
export let moveSnakeDown = () => ({ type: MOVE_SNAKE_DOWN })
export let moveSnakeUp = () => ({ type: MOVE_SNAKE_UP })
export let stopTimer = () => ({ type: STOP_TIMER })

export const moveSnake = direction => dispatch => {

    switch (direction) {
        case 'right':
            dispatch(moveSnakeRight())
            break;
        case 'left':
            dispatch(moveSnakeLeft())
            break;
        case 'up':
            dispatch(moveSnakeUp());
            break;

        case 'down':
            dispatch(moveSnakeDown())
            break;
    }
}
