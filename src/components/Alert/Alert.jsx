import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ field }) => <div className="alert alert-info alert-dismissible fade show mx-auto mt-1" role="alert"
    style={{ width: field.width }}>
    Use <strong>arrows</strong> on your keyboard to control snake
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>

const mapStateToProps = state => ({
    field: state.snake.field
})

export default connect(mapStateToProps)(Alert)