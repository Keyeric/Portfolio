import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  about: {
    marginTop: "3%",
    backgroundImage: "linear-gradient(#2f2f31, #990000)",
    padding: "5%",
    paddingBottom: "5rem",
    color: theme.status.white,
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
    "& p": {
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
      },
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <section className={classes.about}>
      <Typography variant="h2">About Me</Typography>
      <Typography variant="body1">
        Python | React | Node | Javascript | Express | PostgreSQL | HTML | CSS
        <br />
      </Typography>
      <br />
      <Typography variant="body1">
        I am a Lambda School graduate, currently focused on improving my skills and working
        with freelance clients.
      </Typography>
      <br />
      <Typography variant="body1">
        <Link
          href="https://docs.google.com/document/d/1RfAIBnM0tUzac6CJD_CH7ng58T59nkg5JWjr787WJoo/edit?usp=sharing"
          color="primary"
          variant="h6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to my Resume
        </Link>
      </Typography>
      <br />
      <Typography variant="body1">
        <Link
          href="https://www.youracclaim.com/badges/ad205c7c-4ca9-49f1-bd60-66633f007224/public_url"
          color="primary"
          variant="h6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to my Graduation Certificate
        </Link>
      </Typography>
    </section>
  );
}
