import React from 'react';
import { connect } from 'react-redux';
import PieceOfSnake from './PieceOfSnake/PieceOfSnake';
import { moveSnake } from '../../../redux/snakeReducer';

class SnakeContainer extends React.Component {
    componentDidMount() {
        // this.props.moveSnake('right')
    }

    render() {
        return <ul className="snake row" onClick = { () => this.props.moveSnake('down') }>
            {this.props.snake.pieces.map(item => <PieceOfSnake key={item.id} item={item} />)}
        </ul >
    }
}

const mapStateToProps = state => ({
    snake: state.snake
})

export default connect(mapStateToProps, {moveSnake})(SnakeContainer)