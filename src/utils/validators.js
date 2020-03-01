export const required = value => value ? undefined : "Field is empty" 

export const minLength = len => value =>
    (value && value.length < len) ? `Min length is ${len} symbols` : undefined;