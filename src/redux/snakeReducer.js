import { MOVE_SNAKE_AC, SET_DIRECTION, CHECK_GAME_OVER, SET_TARGET, CHECK_TARGET } from './types';

const initState = {
    step: 50,
    field: { width: 600, height: 400 },

    pieces: [
        { id: 0, coor: { left: 150, top: 100 } },
        { id: 1, coor: { left: 100, top: 100 } },
        { id: 2, coor: { left: 50, top: 100 } },
        { id: 3, coor: { left: 0, top: 100 } }
    ],

    direction: 'right',
    gameOver: false
}

const snakeReducer = (state = initState, action) => {
    let headCoor;

    switch (action.type) {
        case MOVE_SNAKE_AC:
            let coor;

            return {
                ...state,
                pieces: state.pieces.map(item => {
                    if (!item.id) {
                        coor = { ...item.coor }

                        switch (state.direction) {
                            case 'right': item.coor.left += state.step; break;
                            case 'up': item.coor.top -= state.step; break;
                            case 'down': item.coor.top += state.step; break;
                            case 'left': item.coor.left -= state.step; break;
                        }
                    } else {
                        let prevCoor = { ...item.coor };
                        item.coor = { ...coor };
                        coor = { ...prevCoor }
                    }

                    return item;
                })
            }

        case SET_DIRECTION:
            if (action.direction === "left" && state.direction === "right" ||
                action.direction === "right" && state.direction === "left" ||
                action.direction === "up" && state.direction === "down" ||
                action.direction === "down" && state.direction === "up") return state;

            return {
                ...state,
                direction: action.direction
            }

        case CHECK_GAME_OVER:
            let GO = false;
            
            headCoor = state.pieces.filter( item => item.id === 0)[0].coor;

            if (headCoor.left + state.step > state.field.width || headCoor.left < 0 ||
                headCoor.top + state.step > state.field.height || headCoor.top < 0 ||
                state.pieces.filter(item => {
                    if (!item.id) return false;
                    if (item.coor.top === headCoor.top && item.coor.left === headCoor.left) return true;
                }).length) GO = true;

            return !GO ? state : {
                ...state,
                field: { ...state.field, backgroundColor: 'lightgray' },
                gameOver: true
            }

        case SET_TARGET:
            console.log('hello')
            return {
                ...state,
                target: {
                    goal: false,
                    coor: {
                        left: ~~(Math.random() * state.field.width / state.step) * state.step,
                        top: ~~(Math.random() * state.field.height / state.step) * state.step
                    }
                }
            }

        case CHECK_TARGET:

            if (!state.target.coor) return state;

            headCoor = state.pieces.filter( item => item.id === 0)[0].coor;

            return (headCoor.top === state.target.coor.top && headCoor.left === state.target.coor.left) ? {
                    ...state,
                    target: {
                        goal: true
                    }
                } : state;

        default:
            return state;
    }
}

export default snakeReducer;

let moveSnake = () => ({ type: MOVE_SNAKE_AC })
export let setDirection = (direction) => ({ type: SET_DIRECTION, direction })
let checkGameOver = () => ({ type: CHECK_GAME_OVER })
export let setTarget = () => ({ type: SET_TARGET })
let checkTarget = () => ({ type: CHECK_TARGET })

export const initTimer = () => dispatch => {
    dispatch(setTarget());

    timer = setInterval(() => {
        dispatch(moveSnake())

        dispatch(checkGameOver())
        dispatch(checkTarget())
    }, 500)
}

export const stopTimer = () => dispatch => {
    console.log('GAME OVER!');
    clearInterval(timer);
}

let timer;