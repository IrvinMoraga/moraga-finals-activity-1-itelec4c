import React from "react";
import { Button, StyledEngineProvider } from "@mui/material/";
import PropTypes from "prop-types";

const MuiButton = ({
  children,
  id,
  className,
  variant,
  disabled,
  onClick,
  type,
  style,
  sx,
}) => {
  return (
    <StyledEngineProvider injectFirst>
      <Button
        id={id}
        className={className}
        variant={variant ? variant : "contained"}
        disabled={disabled}
        onClick={onClick}
        type={type}
        style={style}
        sx={sx}
      >
        {children}
      </Button>
    </StyledEngineProvider>
  );
};

export default MuiButton;

MuiButton.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  style: PropTypes.object,
};
