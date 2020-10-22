import React from 'react';
import './Button.scss';

const Button = ({ children, buttonType, onClick }) => (
    <button className={buttonType} onClick={onClick}>
        {children}
    </button>
);

Button.defaultProps = {
    buttonType: 'primary',
};


export default React.memo(Button);