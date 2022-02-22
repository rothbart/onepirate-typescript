import { Theme } from "@mui/material/styles";
import withStyles from '@mui/styles/withStyles';
import Toolbar from "@mui/material/Toolbar";

export const styles = (theme: Theme) => ({
  root: {
    height: 64,
    [theme.breakpoints.up("sm")]: {
      height: 70,
    },
  },
});

export default withStyles(styles)(Toolbar);
