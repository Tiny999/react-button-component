import React from 'react';

import './Button.css';

const Button = ({variant, disableShadow, disabled, startIcon}) => {
    return (
        <button disabled={disabled} className={`btn ${variant} ${disableShadow ? 'd-shadow' : ''}`}>
            Default
        </button>
    );
};

export default Button;