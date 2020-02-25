import React from 'react';
import { connect } from 'react-redux';
import { moveSnake, stopTimer } from '../../../redux/snakeReducer';
import PieceOfSnake from './PieceOfSnake/PieceOfSnake';

class SnakeContainer extends React.Component {
    componentDidMount() {
        this.props.moveSnake('right');
    }

    render() {
        

        return <ul className="snake row" style={{ ...this.props.snake.coor}} onClick={() => this.props.moveSnake('right')}>
            {this.props.snake.pieces.map( item => <PieceOfSnake key={item.id} /> ) }
        </ul >
    }
}

const mapStateToProps = state => ({
    snake: state.snake
})

export default connect(mapStateToProps, { moveSnake, stopTimer })(SnakeContainer)