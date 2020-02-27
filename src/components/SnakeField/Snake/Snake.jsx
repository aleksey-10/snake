import React from 'react';
import PieceOfSnake from './PieceOfSnake/PieceOfSnake';

export default ({snake}) => <ul className="snake row">
    {snake.pieces.map(item => <PieceOfSnake key={item.id} item={item} step={snake.step} />)}
</ul >
