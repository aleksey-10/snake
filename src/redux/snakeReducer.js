import { MOVE_SNAKE_AC, SET_DIRECTION, CHECK_GAME_OVER, SET_TARGET, CHECK_TARGET, RESET_SNAKE } from './types';

const initState = {
    step: 50,
    field: { width: 750, height: 500 },

    pieces: [
        { id: 0, coor: { left: 100, top: 100 }, bg: 'rgb(27, 146, 37)' },
        { id: 1, coor: { left: 50, top: 100 } },
        { id: 2, coor: { left: 0, top: 100 } }
    ],

    direction: 'right',
    gameOver: false,
    target: {
        // background: 'appleImg',
        goal: false
    }
}

const snakeReducer = (state = initState, action) => {
    let headCoor = state.pieces.find(item => item.id === 0).coor;

    switch (action.type) {
        case MOVE_SNAKE_AC:
            let coor = {};

            return {
                ...state,
                lock: false,
                pieces: state.pieces.map(item => {
                    if (!item.id) {
                        coor = { ...item.coor }

                        switch (state.direction) {
                            case 'right': item.coor.left += state.step; break;
                            case 'up': item.coor.top -= state.step; break;
                            case 'down': item.coor.top += state.step; break;
                            case 'left': item.coor.left -= state.step; break;
                            default: return state;
                        }
                    } else {
                        let prevCoor = { ...item.coor };
                        item.coor = { ...coor };
                        coor = { ...prevCoor }
                    }

                    return item;
                })
            }

        case RESET_SNAKE:
            return {
                ...initState,
                pieces: [
                    { id: 0, coor: { left: 100, top: 100 }, bg: 'rgb(27, 146, 37)' },
                    { id: 1, coor: { left: 50, top: 100 } },
                    { id: 2, coor: { left: 0, top: 100 } }]
            }

        case SET_DIRECTION:
            if ((action.direction === "left" && state.direction === "right") ||
                (action.direction === "right" && state.direction === "left") ||
                (action.direction === "up" && state.direction === "down") ||
                (action.direction === "down" && state.direction === "up")) return state;

            return {
                ...state,
                lock: true,
                direction: action.direction
            }

        case CHECK_GAME_OVER:
            let GO = false;

            if (headCoor.left + state.step > state.field.width || headCoor.left < 0 ||
                headCoor.top + state.step > state.field.height || headCoor.top < 0 ||
                state.pieces.filter(item => { /* check snake body coors === target coors */
                    if (!item.id) return false;
                    return (item.coor.top === headCoor.top && item.coor.left === headCoor.left) ? true : false;
                }).length ||
                state.field.width * state.field.height / state.step ** 2 === state.pieces.length  /* check win */) GO = true;

            return !GO ? state : {
                ...state,
                gameOver: true
            }

        case SET_TARGET:
            let isCoor = false, targetCoor;

            while (!isCoor && !state.gameOver) {
                isCoor = true;

                targetCoor = {
                    left: ~~(Math.random() * state.field.width / state.step) * state.step,
                    top: ~~(Math.random() * state.field.height / state.step) * state.step
                };

                state.pieces.forEach(item => {
                    if (targetCoor.left === item.coor.left && targetCoor.top === item.coor.top) isCoor = false;
                })
            }

            return {
                ...state,
                target: {
                    ...state.target,
                    goal: false,
                    coor: { ...targetCoor }
                }
            }

        case CHECK_TARGET:
            if (!state.target.coor) return state;

            const tailCoor = state.pieces.find( item => item.id === state.pieces.length-1).coor;

            return (headCoor.top === state.target.coor.top && headCoor.left === state.target.coor.left) ? {
                ...state,
                pieces: [
                    ...state.pieces,
                    { id: state.pieces.length, coor: { ...tailCoor } } // create new piece of snake
                ],
                target: {
                    ...state.target,
                    goal: true
                }
            } : state;

        default:
            return state;
    }
}

export default snakeReducer;

let moveSnake = () => ({ type: MOVE_SNAKE_AC })
let resetSnake = () => ({ type: RESET_SNAKE })
export let setDirection = (direction) => ({ type: SET_DIRECTION, direction })
let checkGameOver = () => ({ type: CHECK_GAME_OVER })
export let setTarget = () => ({ type: SET_TARGET })
let checkTarget = () => ({ type: CHECK_TARGET })


export const initTimer = () => dispatch => {
    dispatch(resetSnake());
    dispatch(setTarget());

    timer = setInterval(() => {
        dispatch(moveSnake())

        dispatch(checkGameOver())
        dispatch(checkTarget())
    }, 500)
}

export const stopTimer = () => dispatch => {
    clearInterval(timer);
}

let timer;