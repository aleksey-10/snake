import React from 'react';
import { connect } from 'react-redux';
import { setDirection, stopTimer, initTimer, setTarget } from '../../redux/snakeReducer';
import Snake from './Snake/Snake';
import Target from './Target/Target';
import GameOver from './GameOver/GameOver';
import { setScore, sendScore  } from '../../redux/scoreReducer';

class FieldContainer extends React.Component {

    componentDidMount() {
        this.props.initTimer();
    }

    handleOnKeyDown = event => {
        switch (event.key) {
            case 'ArrowUp': this.props.setDirection('up'); break;
            case 'ArrowRight': this.props.setDirection('right'); break;
            case 'ArrowDown': this.props.setDirection('down'); break;
            case 'ArrowLeft': this.props.setDirection('left'); break;
            default: return;
        }
    }

    render() {

        this.props.snake.gameOver && this.props.stopTimer();
        if (this.props.snake.target.goal) {
            this.props.setTarget();
            this.props.setScore(this.props.snake.pieces.length);
        } 

        return <div className="field mx-auto mt-1" tabIndex='-1' 
            style={{ ...this.props.snake.field }}
            onKeyDown={this.handleOnKeyDown}>

            <small className="small-score" >{this.props.score.points}</small>
            <Snake snake={this.props.snake} />
            {this.props.snake.target && <Target target={this.props.snake.target} step={this.props.snake.step} />}
            {this.props.snake.gameOver && <GameOver {...this.props} />}

        </div>
    }
}

const mapStateToProps = state => ({
    snake: state.snake,
    score: state.score
})

export default connect(mapStateToProps, 
    { setDirection, initTimer, stopTimer, setTarget, setScore, sendScore })(FieldContainer)

