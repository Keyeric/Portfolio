import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  top: {
    textShadow: "0.1rem 0.1rem #990000",
    "& a": {
      color: theme.status.white,
      textDecoration: "none",
      fontSize: "4rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "3.5rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <header className={classes.top}>
      {/* Beginning of the site */}
      <br />
      <Typography variant="h1">
        <a href="https://keyeric.com">Welcome</a>
      </Typography>
    </header>
  );
}
