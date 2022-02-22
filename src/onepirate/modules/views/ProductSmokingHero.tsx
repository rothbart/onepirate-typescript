import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Theme } from "@mui/material/styles";
import { WithStyles } from '@mui/styles';
import withStyles from '@mui/styles/withStyles';
import createStyles from '@mui/styles/createStyles';
import Typography from "../components/Typography";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(9),
    },
    button: {
      border: "4px solid currentColor",
      borderRadius: 0,
      height: "auto",
      padding: theme.spacing(2, 5),
    },
    link: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    buoy: {
      width: 60,
    },
  });

function ProductSmokingHero(props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button}>
        <Typography variant="h4" component="span">
          Got any questions? Need help?
        </Typography>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        We are here to help. Get in touch!
      </Typography>
      <img src="/producBuoy.svg" className={classes.buoy} alt="buoy" />
    </Container>
  );
}

export default withStyles(styles)(ProductSmokingHero);
