import React, { useEffect } from "react";
import { Navigate, Link as RouterLink, useNavigate } from "react-router-dom";

// material-ui
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

import { Formik } from "formik";
import * as Yup from "yup";

import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { useLoginUserMutation } from "@/app/features/userApiSlice";
import Skeleton from "@mui/material/Skeleton";
const LoginForm = () => {
  const navigate = useNavigate();
  const [LoginUser, { isLoading, isError, isSuccess, error }] = useLoginUserMutation();
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    if (isSuccess) {
      toast.success(" Login Successful");
      navigate("/");
    }
  }, [isSuccess]);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {isLoading ? (
        <>
          <Skeleton variant="rounded" width={"50%"} height={"40px"} />
          <Skeleton variant="rounded" width={"50%"} height={"40px"} />
          <Skeleton variant="rounded" width={"50%"} height={"40px"} />
          <Skeleton variant="rounded" width={"50%"} height={"40px"} />
        </>
      ) : (
        <>
          <Formik
            initialValues={{
              userName: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              userName: Yup.string().max(255).required("User Name  is required"),
              password: Yup.string().max(255).required("Password is required"),
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
              LoginUser(values)
                .unwrap()
                .then(() => {
                  toast.success(" Login Successful");
                  navigate("/");
                })
                .catch((err) => {
                  toast.error(err?.data?.message);
                  setErrors({ submit: err?.data?.message });
                  setStatus({ sucess: false });
                })
                .finally(() => {
                  setSubmitting(false);
                });
            }}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="email-login"> User Name </InputLabel>
                      <OutlinedInput
                        id="email-login"
                        type="text"
                        value={values.userName}
                        name="userName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter user name "
                        fullWidth
                        error={Boolean(touched.email && errors.email)}
                      />
                      {touched.userName && errors.userName && (
                        <FormHelperText error id="standard-weight-helper-text-email-login">
                          {errors.userName}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="password-login">Password</InputLabel>
                      <OutlinedInput
                        fullWidth
                        error={Boolean(touched.password && errors.password)}
                        id="-password-login"
                        type={showPassword ? "text" : "password"}
                        value={values.password}
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              size="large"
                            >
                              {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            </IconButton>
                          </InputAdornment>
                        }
                        placeholder="Enter password"
                      />
                      {touched.password && errors.password && (
                        <FormHelperText error id="standard-weight-helper-text-password-login">
                          {errors.password}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sx={{ mt: -1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked}
                            onChange={(event) => setChecked(event.target.checked)}
                            name="checked"
                            color="primary"
                            size="small"
                          />
                        }
                        label={<Typography variant="h6">Keep me sign in</Typography>}
                      />
                      <Link variant="h6" component={RouterLink} to="" color="text.primary">
                        Forgot Password?
                      </Link>
                    </Stack>
                  </Grid>
                  {errors.submit && (
                    <Grid item xs={12}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </>
      )}
    </>
  );
};

export default LoginForm;
