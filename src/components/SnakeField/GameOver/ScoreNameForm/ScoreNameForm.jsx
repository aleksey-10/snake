import React from 'react';
import { reduxForm, Field } from 'redux-form';

const ScoreNameForm = props => <form onSubmit={props.handleSubmit}>
    <div className="input-group my-3">
        <Field component="input" placeholder="Name" name="name"
            type="text" className="form-control"
            aria-label="Recipient's username" aria-describedby="button-addon" />
        <div className="input-group-append">
            <button className="btn btn-outline-light" type="submit" id="button-addon">OK</button>
        </div>
    </div>
</form>

export default reduxForm({ form: 'scoreName' })(ScoreNameForm)
