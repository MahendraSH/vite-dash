import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  FormControl,
  useMediaQuery,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useTheme } from "@emotion/react";

const DynamicForm = ({ formConfig }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(() => theme.breakpoints.down("sm"));

  const initialValues = {};
  const formItems = formConfig["form-items"];

  formItems.forEach((item) => {
    initialValues[item.name] = "";
    if (!item.type) {
      item.type = "input-text"; // Default type to "input-text" if not specified
    }
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log("Form submitted:", values);
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {formItems.map((item, index) => (
              <Grid item xs={12} key={index}>
                {item.type === "input-text" && (
                  <TextField
                    fullWidth
                    variant="outlined"
                    label={item.label}
                    name={item.name}
                    value={values[item.name]}
                    onChange={handleChange}
                  />
                )}
                {item.type === "input-number" && (
                  <OutlinedInput
                    fullWidth
                    type="number"
                    placeholder={item.label}
                    name={item.name}
                    value={values[item.name]}
                    onChange={handleChange}
                  />
                )}
                {item.type === "text-area" && (
                  <TextField
                    fullWidth
                    variant="outlined"
                    label={item.label}
                    multiline
                    rows={4}
                    name={item.name}
                    value={values[item.name]}
                    onChange={handleChange}
                  />
                )}
                {item.type === "select" && (
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>{item.label}</InputLabel>
                    <Select value={values[item.name]} onChange={handleChange} label={item.label} name={item.name}>
                      {item.options.map((option, index) => (
                        <MenuItem key={index} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
                {item.type === "radio" && (
                  <RadioGroup name={item.name} value={values[item.name]} onChange={handleChange}>
                    <Stack direction={isSmallScreen ? "column" : "row"}>
                      {item.options.map((option, index) => (
                        <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                      ))}
                    </Stack>
                  </RadioGroup>
                )}
                {item.type === "checkbox" && (
                  <Stack direction={isSmallScreen ? "column" : "row"}>
                    {item.options.map((option, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            name={item.name}
                            checked={values[item.name].includes(option)}
                            onChange={(e) => {
                              const checked = e.target.checked;
                              const newValue = checked ? [...values[item.name], option] : values[item.name].filter((val) => val !== option);
                              handleChange({
                                target: {
                                  name: item.name,
                                  value: newValue,
                                },
                              });
                            }}
                          />
                        }
                        label={option}
                      />
                    ))}
                  </Stack>
                )}
                {item.type === "date-picker" && (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label={item.label}
                      name={item.name}
                      value={values[item.name]}
                      onChange={(newValue) => {
                        handleChange({
                          target: {
                            name: item.name,
                            value: newValue,
                          },
                        });
                      }}
                      textField={(props) => <TextField {...props} fullWidth variant="outlined" />}
                    />
                  </LocalizationProvider>
                )}
              </Grid>
            ))}
            <Grid item xs={12}>
              {formConfig["form-btns"].map((btn, index) => (
                <Button key={index} type={btn.type} variant="contained" color="primary" style={{ marginRight: "10px" }}>
                  {btn.label}
                </Button>
              ))}
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

DynamicForm.propTypes = {
  formConfig: PropTypes.object.isRequired,
};

export default DynamicForm;
