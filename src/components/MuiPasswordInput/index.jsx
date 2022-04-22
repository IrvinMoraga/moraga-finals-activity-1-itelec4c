import React from "react";
import {
  FormControl,
  InputLabel,
  StyledEngineProvider,
  OutlinedInput,
  IconButton,
  InputAdornment,
  FormHelperText,
} from "@mui/material/";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import PropTypes from "prop-types";

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

const MuiPasswordInput = ({
  formControlClassName,
  inputLabelValue,
  outlinedInputName,
  outlinedInputID,
  outlinedInputLabel,
  outlinedInputValue,
  outlinedInputOnChange,
  outlinedInputError,
  formHelperTextValue,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledEngineProvider injectFirst>
      <FormControl variant="outlined" className={formControlClassName}>
        <InputLabel htmlFor={outlinedInputID}>{inputLabelValue}</InputLabel>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          name={outlinedInputName}
          id={outlinedInputID}
          label={outlinedInputLabel}
          value={outlinedInputValue}
          onChange={outlinedInputOnChange}
          error={outlinedInputError}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle field value visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText sx={{ color: "#d32f2f" }}>
          {formHelperTextValue}
        </FormHelperText>
      </FormControl>
    </StyledEngineProvider>
  );
};

export default MuiPasswordInput;

MuiPasswordInput.propTypes = {
  formControlClassName: PropTypes.string,
  inputLabelValue: PropTypes.string,
  outlinedInputName: PropTypes.string,
  outlinedInputID: PropTypes.string,
  outlinedInputLabel: PropTypes.string,
  outlinedInputValue: PropTypes.string,
  outlinedInputOnChange: PropTypes.func,
  outlinedInputError: PropTypes.bool,
  formHelperTextValue: PropTypes.string,
};
