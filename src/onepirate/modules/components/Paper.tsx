import React from "react";
import clsx from "clsx";
import MuiPaper, { PaperProps } from "@material-ui/core/Paper";
import { withStyles, Theme, WithStyles } from "@material-ui/core/styles";

export enum PaperBackground {
  Light = "light",
  Main = "main",
  Dark = "dark",
}

const styles = (theme: Theme) => ({
  [backgroundStyleMapping[PaperBackground.Light]]: {
    backgroundColor: theme.palette.secondary.light,
  },
  [backgroundStyleMapping[PaperBackground.Main]]: {
    backgroundColor: theme.palette.secondary.main,
  },
  [backgroundStyleMapping[PaperBackground.Dark]]: {
    backgroundColor: theme.palette.secondary.dark,
  },
  padding: {
    padding: theme.spacing(1),
  },
});

interface ExtraPaperProps {
  background: PaperBackground;
  padding: boolean;
}

const backgroundStyleMapping = {
  [PaperBackground.Light]: "backgroundLight",
  [PaperBackground.Main]: "backgroundMain",
  [PaperBackground.Dark]: "backgroundDark",
};

function Paper(
  props: PaperProps & ExtraPaperProps & WithStyles<typeof styles>
) {
  const { background, classes, className, padding = false, ...other } = props;

  return (
    <MuiPaper
      elevation={0}
      square
      className={clsx(
        classes[backgroundStyleMapping[background]],
        {
          [classes.padding]: padding,
        },
        className
      )}
      {...other}
    />
  );
}

export default withStyles(styles)(Paper);
