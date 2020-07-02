import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  address: {
    fontSize: "0.9rem",
    paddingTop: "1rem",
    backgroundImage: "linear-gradient(#990000, #2f2f31)",
    "& a": {
      textDecoration: "none",
      color: theme.status.black,
      [theme.breakpoints.down("lg")]: {
        fontSize: "1.2rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <address className={classes.address}>
        <br />
        <a href="mailto: keyeric.bristol@gmail.com">
          Click here to contact me!
        </a>
        <br />
        Phoenix, Arizona
        <br />
        <a href="tel:(240) 528-0810">(240) 528-0810</a>
      </address>
    </footer>
  );
}
