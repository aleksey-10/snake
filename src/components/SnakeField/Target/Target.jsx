import React from 'react';
import appleImg from '../../../assets/img/apple.png'

export default props => <div className="target" style={{ ...props.target.coor }}>
    <img src={appleImg} style={{width: props.step, height: props.step}} alt="" />
</div>