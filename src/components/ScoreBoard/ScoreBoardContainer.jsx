import React from 'react';
import { connect } from 'react-redux';
import { getScoreBoard } from '../../redux/scoreReducer';
import ScoreBoardModal from './ScoreBoardModal';

class ScoreBoardContainer extends React.Component {

    componentDidMount() {
        this.props.getScoreBoard();
    }

    render() {
        return <div style={{ width: this.props.field.width }} className="m-auto">

        <button type="button" className="btn btn-info mt-2 w-100" data-toggle="modal" data-target="#exampleModal">
            Show scoreboard
        </button>
    
        <ScoreBoardModal {...this.props} />
    </div>
    }
}

const mapStateToProps = state => ({
    score: state.score,
    field: state.snake.field
})

export default connect(mapStateToProps, {getScoreBoard})(ScoreBoardContainer)