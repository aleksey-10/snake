import React from 'react';
import ScoreNameForm from './ScoreNameForm/ScoreNameForm';

export default props => {

    const addScoreName = (values) => {
        props.sendScore(values.name, props.score.points);
        props.initTimer();
    }

    return <div className="game-over row align-items-center justify-content-center">
        <div>
            <h1 className="display-4 m-3">GAME OVER</h1>
            Your score {props.score.points}
            <ScoreNameForm onSubmit={addScoreName} />
            <div className="col-12 mt-5">
                <button className="btn btn-outline-light btn-lg" onClick={() => props.initTimer()} >Try again</button>
            </div>
        </div>
    </div>
}