import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://snake-fa6cd.firebaseio.com/"
})

export const scoreAPI = {
    sendScore(name, score) {
        return instance.post("scoreBoard.json", {name, score} )
    },

    getScores() {
        return instance.get("scoreBoard.json").then(response => response.data)
    }
}