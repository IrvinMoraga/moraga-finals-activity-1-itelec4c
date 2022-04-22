import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Box,
  Typography,
  InputLabel,
  TextField,
  MenuItem,
  StyledEngineProvider,
} from "@mui/material";
import MuiPasswordInput from "../../components/MuiPasswordInput";
import MuiButton from "../../components/MuiButton";
import "./signup.css";

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  gender: yup.string().required("Please select your gender."),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters."),
  confirmPassword: yup
    .string()
    .required("Please confirm your password.")
    .oneOf([yup.ref("password"), undefined], "Passwords do not match"),
});

export default function Signup({ signUpHandler, navigateToLoginHandler }) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      signUpHandler(values);
    },
    validationSchema: validationSchema,
  });
  return (
    <StyledEngineProvider injectFirst>
      <Box
        component="form"
        className="signUpPageForm"
        sx={{ boxShadow: 3 }}
        onSubmit={formik.handleSubmit}
      >
        <Typography
          variant="h4"
          className="signUpPageHeader"
          sx={{ fontWeight: 600 }}
        >
          Sign Up
        </Typography>
        <Box className="nameContainer">
          <div className="nameField">
            <InputLabel className="signUpLabel">First Name</InputLabel>
            <TextField
              type="text"
              name="firstName"
              className="signUpInput"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </div>
          <div className="nameField">
            <InputLabel className="signUpLabel">Last Name</InputLabel>
            <TextField
              type="text"
              name="lastName"
              className="signUpInput"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </div>
        </Box>

        <InputLabel className="signUpLabel">Gender</InputLabel>
        <TextField
          id="outlined-select-gender"
          select
          type="text"
          name="gender"
          className="signUpInput"
          value={formik.values.gender}
          onChange={formik.handleChange}
          error={formik.touched.gender && Boolean(formik.errors.gender)}
          helperText={formik.touched.gender && formik.errors.gender}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Prefer not to say"}>Prefer not to say</MenuItem>
        </TextField>
        <InputLabel className="signUpLabel">E-mail</InputLabel>
        <TextField
          type="email"
          name="email"
          className="signUpInput"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <InputLabel className="signUpLabel">Password</InputLabel>
        <MuiPasswordInput
          formControlClassName="signUpInput"
          outlinedInputID="signUpPasswordInput"
          outlinedInputName="password"
          outlinedInputOnChange={formik.handleChange}
          outlinedInputValue={formik.values.password}
          outlinedInputError={
            formik.touched.password && Boolean(formik.errors.password)
          }
          formHelperTextValue={
            formik.touched.password && formik.errors.password
          }
        />
        <InputLabel className="signUpLabel">Confirm Password</InputLabel>
        <MuiPasswordInput
          formControlClassName="signUpInput"
          outlinedInputID="signUpConfirmPasswordInput"
          outlinedInputName="confirmPassword"
          outlinedInputOnChange={formik.handleChange}
          outlinedInputValue={formik.values.confirmPassword}
          outlinedInputError={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          formHelperTextValue={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <MuiButton type="submit" id="signUp-submit">
          Submit
        </MuiButton>
        <MuiButton
          id="signUp-navigate-to-Login"
          onClick={() => {
            navigateToLoginHandler();
          }}
        >
          Login
        </MuiButton>
      </Box>
    </StyledEngineProvider>
  );
}
