import React from "react";
import Social from "./Social";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    paddingTop: "1rem",
    backgroundColor: theme.status.red,
    paddingBottom: "1rem",
    "& h2": {
      textDecoration: "underline",
      color: theme.status.white,
      textShadow: "0.1rem 0.1rem #53131e",
      fontSize: "2rem",
      marginBottom: "1.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));

export default function Media() {
  const classes = useStyles();
  return (
    <section className={classes.media}>
      <br />
      <Typography variant="h2">Social Media</Typography>
      <Social />
      <br />
    </section>
  );
}
