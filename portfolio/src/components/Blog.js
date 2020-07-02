import React from "react";
import Text from "./Text";
import BW4 from "./Bw4.js";
import Game from "./Game.js";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  blog: {
    backgroundColor: theme.status.red,
    borderTop: "0.3rem solid black",
    paddingTop: "0.5rem",
    borderBottom: "0.3rem solid black",
    paddingBottom: "5rem",
    display: "flex",
    flexDirection: "column",
    // flexWrap: "nowrap",
    // justifyContent: "center",
    alignItems: "center",
    // color: theme.status.white,
    textShadow: "0.1rem 0.1rem #53131e",
    "& h2": {
      textDecoration: "underline",
      color: theme.status.white,
      textShadow: "0.1rem 0.1rem #53131e",
      fontSize: "2rem",
      marginBottom: "1.5rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
    },
  },
}));

export default function Blog() {
  const classes = useStyles();
  return (
    <div className={classes.blog}>
      <br />
      <Typography variant="h2">Projects</Typography>
      <Text />
      <br />
      <BW4 />
      <br />
      <Game />
    </div>
  );
}
