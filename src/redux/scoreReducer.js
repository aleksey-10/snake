import { SET_SCORE, SET_SCORE_BOARD } from "./types"
import { scoreAPI } from './../api/api';

const initState = {
    points: 3
}

const scoreReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_SCORE:
            return {
                ...state,
                points: action.score 
            }

        case SET_SCORE_BOARD:
            return {
                ...state,
                scoreBoard: action.data.sort((a, b) => b.score - a.score).map((item, i) => {
                    item.pos = i + 1;
                    return item
                })
            }

        default:
            return state
    }
}

export default scoreReducer

export let setScore = score => ({ type: SET_SCORE, score })
let setScoreBoard = data => ({ type: SET_SCORE_BOARD, data })

export const sendScore = (name, points) => dispatch => {
    scoreAPI.sendScore(name, points);
}

export const getScoreBoard = () => dispatch => {
    scoreAPI.getScores()
        .then(data => {
            data && dispatch(setScoreBoard([...Object.values(data)])) 
        })
}