import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Box,
  Typography,
  InputLabel,
  TextField,
  StyledEngineProvider,
} from "@mui/material";
import MuiPasswordInput from "../../components/MuiPasswordInput";
import MuiButton from "../../components/MuiButton";
import "./login.css";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function Login({ loginHandler, navigateToSignUpHandler }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      loginHandler(values);
    },
    validationSchema: validationSchema,
  });
  return (
    <StyledEngineProvider injectFirst>
      <Box
        component="form"
        className="loginPageForm"
        sx={{ boxShadow: 3 }}
        onSubmit={formik.handleSubmit}
      >
        <Typography
          variant="h4"
          className="loginPageHeader"
          sx={{ fontWeight: 600 }}
        >
          Login
        </Typography>
        <InputLabel className="loginLabel">E-mail</InputLabel>
        <TextField
          type="email"
          name="email"
          className="loginInput"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <InputLabel className="loginLabel">Password</InputLabel>
        <MuiPasswordInput
          formControlClassName="loginInput"
          outlinedInputID="loginPasswordInput"
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
        <MuiButton type="submit" id="login-submit">
          Submit
        </MuiButton>
        <MuiButton
          id="login-navigate-to-Signup"
          onClick={() => {
            navigateToSignUpHandler();
          }}
        >
          Sign Up
        </MuiButton>
      </Box>
    </StyledEngineProvider>
  );
}
