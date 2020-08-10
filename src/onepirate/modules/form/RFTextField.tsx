import React from "react";
import TextField from "../components/TextField";
import { TextFieldProps } from "@material-ui/core";
import { FieldRenderProps } from "react-final-form";

interface RFTextFieldProps {
  meta: {
    error?: string;
    submitError?: string;
    touched: boolean;
  };
  input: FieldRenderProps<string, HTMLInputElement>;
}

function RFTextField(props: TextFieldProps & RFTextFieldProps) {
  const {
    autoComplete,
    input,
    InputProps,
    meta: { touched, error, submitError },
    ...other
  } = props;

  return (
    <TextField
      size="medium"
      error={Boolean(touched && (error || submitError))}
      {...input}
      {...other}
      InputProps={{
        inputProps: {
          autoComplete,
        },
        ...InputProps,
      }}
      helperText={touched ? error || submitError : ""}
    />
  );
}

export default RFTextField;
