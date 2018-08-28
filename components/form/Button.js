import React from 'react';

const Button = ({name='', type='button', children, text= null, isLoading = false, className = '', ...rest}) => 
{
    let additionalClasses = className
    additionalClasses = (isLoading === true) ? additionalClasses +' is-loading' : additionalClasses;
    return(
        <button className={`button  ${additionalClasses}`}>{ text || children }</button>
    )

}

export default Button;