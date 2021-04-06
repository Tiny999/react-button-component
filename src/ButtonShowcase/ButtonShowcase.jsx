import React from 'react';

import './ButtonShowcase.css';

const ButtonShowcase = ({title, children}) => {
    return (
        <div className="showcase">
            <p className="showcase__title">{title}</p>
            {children}
        </div>
    );
};

export default ButtonShowcase;