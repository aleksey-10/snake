import React from 'react';
import ScoreNameForm from './ScoreNameForm/ScoreNameForm';

export default () => <div className="game-over row align-items-center justify-content-center">
    <div>
        <h1 className="display-4 m-3">GAME OVER</h1>
        <ScoreNameForm />
        <div className="col-12 mt-5"><button className="btn btn-outline-light btn-lg">Try again</button> </div>
    </div>
</div>