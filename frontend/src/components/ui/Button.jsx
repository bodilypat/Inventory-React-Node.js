//src/components/ui/Button.jsx 

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({ label, onClick, disabled }) => {
    return (
        <button className="ui-button" onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(['primary', 'secondary','danger','success', 'warning','outline', 'info']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    variant: 'primary',
    size: 'medium',
    type: 'button',
    disabled: false,
};

export default Button;
