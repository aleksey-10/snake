import React from 'react';
import SnakeContainer from './Snake/SnakeContainer';
import { connect } from 'react-redux';
import { moveSnake } from '../../redux/snakeReducer';

const FieldContainer = props => <div className="field" tabIndex='-1'
    onKeyDown={ event => {
        switch (event.key) {
            case 'ArrowUp': props.moveSnake('up'); break;
            case 'ArrowRight': props.moveSnake('right'); break;
            case 'ArrowDown': props.moveSnake('down'); break;
            case 'ArrowLeft': props.moveSnake('left'); break;
            default: return;
        }
    }}><SnakeContainer /></div>

const mapStateToProps = state => ({
    snake: state.snake
})

export default connect(mapStateToProps, {moveSnake})(FieldContainer)

