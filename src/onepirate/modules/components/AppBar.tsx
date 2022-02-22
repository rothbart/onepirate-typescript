import React from "react";
import { Theme } from "@mui/material/styles";
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";

const styles = (theme: Theme) => ({
  root: {
    color: theme.palette.common.white,
  },
});

function AppBar(props: WithStyles<typeof styles> & AppBarProps) {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

export default withStyles(styles)(AppBar);
