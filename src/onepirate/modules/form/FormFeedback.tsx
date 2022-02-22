import React from "react";
import clsx from "clsx";
import { Theme } from "@mui/material/styles";
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import Typography from "../components/Typography";

const styles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  error: {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.dark,
  },
  success: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.dark,
  },
});

interface FormFeedbackProps {
  error?: boolean;
  success?: boolean;
}

function FormFeedback(
  props: WithStyles<typeof styles> &
    React.HTMLAttributes<HTMLDivElement> &
    FormFeedbackProps
) {
  return (
    <div
      className={clsx(
        props.classes.root,
        {
          [props.classes.error]: !!props.error,
          [props.classes.success]: !!props.success,
        },
        props.className
      )}
    >
      <Typography color="inherit">{props.children}</Typography>
    </div>
  );
}

export default withStyles(styles)(FormFeedback);
