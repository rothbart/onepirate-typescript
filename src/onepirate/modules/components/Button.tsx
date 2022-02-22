import { Theme } from "@mui/material/styles";
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import createStyles from '@mui/styles/createStyles';
import MuiButton, { ButtonProps } from "@mui/material/Button";
import React from "react";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 0,
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: theme.typography.h1.fontFamily,
      padding: theme.spacing(2, 4),
      fontSize: theme.typography.pxToRem(14),
      boxShadow: "none",
      "&:active, &:focus": {
        boxShadow: "none",
      },
    },
    sizeSmall: {
      padding: theme.spacing(1, 3),
      fontSize: theme.typography.pxToRem(13),
    },
    sizeLarge: {
      padding: theme.spacing(2, 5),
      fontSize: theme.typography.pxToRem(16),
    },
  });

function Button<C extends React.ElementType>(
  props: ButtonProps<C, { component?: C }> & WithStyles<typeof styles>
) {
  return <MuiButton {...props} />;
}

export default withStyles(styles)(Button);
