import React from 'react'
import PropTypes from 'prop-types';

import { StyledButton } from './style'

const Button = ({ children, variant, onClick }) => {
    return <StyledButton className={variant} onClick={onClick}>{children}</StyledButton>
}

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    variant: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    variant: '',
    onClick: () => { }
}

export default React.memo(Button)