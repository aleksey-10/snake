import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { minLength, required } from './../../../../utils/validators';
import InputName from './InputName/InputName';

let minLength3 = minLength(3);

const ScoreNameForm = props => <form onSubmit={props.handleSubmit}>
        <div className="input-group my-3">
            <Field component={InputName} placeholder="Name" name="name" validate={[required, minLength3]}
                type="text" className="form-control"
                aria-label="Recipient's username" aria-describedby="button-addon" />
        </div>
    </form>

export default reduxForm({ form: 'scoreName' })(ScoreNameForm)
