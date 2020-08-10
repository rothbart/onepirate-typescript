import React from "react";
import TextField, { OnePirateTextFieldProps } from "../components/TextField";
import { FieldRenderProps } from "react-final-form";

interface RFTextFieldProps {
  meta: {
    error?: string;
    submitError?: string;
    touched?: boolean;
  };
  input: FieldRenderProps<string, HTMLInputElement>;
}

function RFTextField(
  props: OnePirateTextFieldProps & FieldRenderProps<string, HTMLElement>
) {
  const {
    autoComplete,
    input,
    InputProps,
    meta: { touched, error, submitError },
    ...other
  } = props;

  return (
    <TextField
      error={Boolean(!!touched && (error || submitError))}
      {...input}
      {...other}
      InputProps={{
        inputProps: {
          autoComplete,
        },
        ...InputProps,
      }}
      helperText={!!touched ? error || submitError : ""}
    />
  );
}

export default RFTextField;
