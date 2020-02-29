import React from 'react';
import Buddy from './Buddy/Buddy';

export default props => <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Score board</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <ul>
                    <li className="buddy-score row align-items-center w-100 pb-2">
                        <span className="col-2"><strong>#</strong></span>
                        <span className="col-7"><strong>Name</strong></span>
                        <span className="col"><strong>Score</strong></span>
                    </li>
                    {props.score.scoreBoard &&
                        props.score.scoreBoard.map(item => <Buddy item={item} key={item.pos} />)
                    }
                </ul>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>