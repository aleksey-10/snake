import React from 'react';

export default props => <li style={{ ...props.item.coor }} className="snake-part" >
    {props.item.id}
</li>
