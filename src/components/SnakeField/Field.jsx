import React from 'react';
import { connect } from 'react-redux';
import { setDirection, stopTimer, initTimer, setTarget } from '../../redux/snakeReducer';
import Snake from './Snake/Snake';
import Target from './Target/Target';

class FieldContainer extends React.Component {

    componentDidMount() {
        this.props.initTimer();
    }

    render() {
        if (this.props.snake.gameOver) this.props.stopTimer();
        if (this.props.snake.target) this.props.snake.target.goal && this.props.setTarget();

        return <div className="field" tabIndex='-1' style={{ ...this.props.snake.field }}
            onKeyDown={event => {
                switch (event.key) {
                    case 'ArrowUp': this.props.setDirection('up'); break;
                    case 'ArrowRight': this.props.setDirection('right'); break;
                    case 'ArrowDown': this.props.setDirection('down'); break;
                    case 'ArrowLeft': this.props.setDirection('left'); break;
                    default: return;
                }
            }}>
            <Snake snake={this.props.snake} />
            {this.props.snake.target && <Target target={this.props.snake.target} />}
        </div>
    }
}

const mapStateToProps = state => ({
    snake: state.snake
})

export default connect(mapStateToProps, { setDirection, initTimer, stopTimer, setTarget })(FieldContainer)

