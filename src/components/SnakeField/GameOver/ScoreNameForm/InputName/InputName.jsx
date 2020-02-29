import React from 'react';

export default ({ input, meta, ...props }) => <>
    <input {...input} {...props} />
    {meta.touched && meta.error &&
        <small className="error-alert" role="alert">* {meta.error}</small>}
    <div className="input-group-append">
        <button className="btn btn-outline-light" type="submit" id="button-addon" disabled={meta.error && true}>OK</button>
    </div>
</>
