import React from 'react';

export default ({ input, meta, ...props }) => <>
    <input {...input} {...props} />
    {meta.touched && meta.error &&
        <small className="error-alert" role="alert">* {meta.error}</small>}
</>
