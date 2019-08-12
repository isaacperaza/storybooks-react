import React from 'react';
import PropTypes from 'prop-types';
import { default as MUIButton } from '@material-ui/core/Button';

const Button = props => {
  const { children, onClick, ...restOfProps } = props;

  return (
    <MUIButton onClick={onClick} {...restOfProps}>
      {children}
    </MUIButton>
  );
};

Button.defaultProps = {
  children: 'Click here',
};

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;
