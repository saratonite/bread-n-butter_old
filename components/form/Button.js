import React from 'react';

const Button = ({name='', type='button', children, text= null, ...rest}) => (
    <button className="button is-primary is-fullwidth">{ text || children }</button>
)

export default Button;