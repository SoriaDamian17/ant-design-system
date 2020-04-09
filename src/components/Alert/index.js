import React from 'react';
import './Alert.scss';

const Alert = ({children, alertType}) => (
    <div className={`alert alert-${alertType}`}>
        {children}
    </div>
)

export default Alert;