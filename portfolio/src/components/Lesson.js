import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  lesson: {
    color: theme.status.orange,
    textShadow: "0.03rem 0.03rem #fff8f0",
    fontSize: "1.4rem",
  },
}));

export default function Lesson() {
  const classes = useStyles();
  return (
    <Typography variant="body1" className={classes.lesson}>
      You never know what you can do, until you do it.
      <br />
      Telling yourself what you can and can't do is a recipe for failure.
    </Typography>
  );
}
