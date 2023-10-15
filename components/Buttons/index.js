// Button.js

import React from "react";
import PropTypes from "prop-types";
import { StyledButton, StyledLinkButton } from "./interface";

const Button = ({ label, onClick, className, isLink }) => {
  const StyledComponent = isLink ? StyledLinkButton : StyledButton;

  return (
    <StyledComponent className={className} onClick={onClick}>
      {label}
    </StyledComponent>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isLink: PropTypes.bool,
};

export default Button;
