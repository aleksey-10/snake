import React from 'react';

export default ({ item }) => <li className="buddy-score row align-items-center w-100">
    <span className="col-2">{item.pos}</span>
    <span className="col-7">{item.name}</span>
    <span className="col">{item.score}</span>
</li>
