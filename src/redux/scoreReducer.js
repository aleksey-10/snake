import { SET_SCORE } from "./types"

const initState ={
    points: 3 
} 

const scoreReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_SCORE:
            console.log(state.points)
            return {
                ...state,
                points: ++state.points
            }

        default:
            return state
    }
}

export default scoreReducer

export let setScore = () => ({type: SET_SCORE})