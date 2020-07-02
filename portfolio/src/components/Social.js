import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  social: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    margin: "auto",
    padding: "auto",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& div": {
      margin: "0.5rem 0",
      [theme.breakpoints.down("lg")]: {
        fontSize: "1.5rem",
      },
    },
    "& a": {
      textDecoration: "none",
      color: theme.status.black,
      textShadow: "0.05rem 0.05rem #fff8f0",
      fontSize: "3rem",
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        padding: "-3rem",
        fontSize: "2.3rem",
        marginLeft: "0",
        marginRight: "0",
      },
    },
  },
  icons: {
    display: "none",
    margin: "auto",
    padding: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      maxWidth: "100%",
    },
    "& div": {
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      "& div": {
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
          width: "50%",
          margin: "1.5rem 1rem",
        },
        "& a": {
          textDecoration: "none",
          color: theme.status.black,
          textShadow: "0.05rem 0.05rem #fff8f0",
          fontSize: "3rem",
          [theme.breakpoints.down("sm")]: {
            maxWidth: "100%",
            fontSize: "3rem",
          },
          "& span": {
            display: "none",
          },
        },
      },
    },
  },
}));

export default function Social() {
  const classes = useStyles();
  return (
    <section>
      <section className={classes.social}>
        {/* GitHub here */}
        <div>
          <a
            href="https://github.com/Keyeric"
            target="_blank"
            rel="noopener noreferrer"
            className="fab fa-github-square"
          >
            GitHub
          </a>
        </div>

        {/* LinkedIn here */}
        <div>
          <a
            href="https://linkedin.com/in/Keyeric/"
            target="_blank"
            rel="noopener noreferrer"
            className="fab fa-linkedin"
          >
            LinkedIn
          </a>
        </div>

        {/* YouTube here */}
        <div>
          <a
            href="https://youtube.com/c/GothKazu"
            target="_blank"
            rel="noopener noreferrer"
            className="fab fa-youtube"
          >
            YouTube
          </a>
        </div>

        {/* Medium here */}
        <div>
          <a
            href="https://twitter.com/KeyericB"
            target="_blank"
            rel="noopener noreferrer"
            className="fab fa-twitter"
          >
            Twitter
          </a>
        </div>
      </section>

      <section className={classes.icons}>
        <div>
          {/* GitHub here */}
          <div>
            <a
              href="https://github.com/Keyeric?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-github-square"
              a
            >
              <span>Link to Key eric's Github repositories</span>
            </a>
          </div>

          {/* LinkedIn here */}
          <div>
            <a
              href="https://linkedin.com/in/Keyeric/"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-linkedin"
              a
            >
              <span>Link to Key eric's Linked in profile</span>
            </a>
          </div>
        </div>
        <div>
          {/* YouTube here */}
          <div>
            <a
              href="https://youtube.com/c/GothKazu"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-youtube"
              a
            >
              <span>Link to Key eric's you tube page</span>
            </a>
          </div>

          {/* Medium here */}
          <div>
            <a
              href="https://medium.com/@keyeric"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-medium"
              a
            >
              <span>Link to Key eric's medium account</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
