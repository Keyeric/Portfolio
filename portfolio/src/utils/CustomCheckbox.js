import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
// import { useColorblind } from "../hooks/useColorblind";

const useStyles = makeStyles((theme) => ({
  button: {
    border: "1px solid blue",
    display: "flex",
    color: theme.status.white,
    verticalAlign: "baseline",
    fontSize: "3rem",
    root: {
      marginRight: "25rem",
      [theme.breakpoints.down("sm")]: {
        marginRight: "25rem",
      },
      [theme.breakpoints.down("xs")]: {
        marginRight: "8rem",
      },
      color: theme.status.white,
      "&$checked": {
        color: theme.status.red,
      },
    },
    checked: {},
  },
}));

export default function CustomCheckbox() {
  const classes = useStyles();
  // const [colorblind, setColorblind] = useColorblind(false);
  // const toggleSight = (e) => {
  //   e.preventDefault();
  //   setColorblind(!colorblind);
  // };

  return (
    <div className={classes.button}>
      <Checkbox />
      <h1>Colorblind?</h1>
    </div>
  );
}
