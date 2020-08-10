import React from "react";
import Button from "../components/Button";
import defer from "./defer";

interface FormButtonProps {
  disabled?: boolean;
  mounted?: boolean;
}

function FormButton(props: FormButtonProps) {
  const { disabled, mounted, ...others } = props;
  return (
    <Button
      disabled={!mounted || !!disabled}
      type="submit"
      variant="contained"
      {...others}
    />
  );
}
export default defer(FormButton);
