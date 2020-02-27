import React from 'react';

export default props => <li
    style={{
        ...props.item.coor, 
        backgroundColor: props.item.bg,
        width: props.step,
        height: props.step
        }} className="snake-part" ></li>
