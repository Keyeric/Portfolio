import React from "react";
import clsx from "clsx";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  Collapse,
  IconButton,
  Link,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    maxWidth: "75%",
    background: theme.status.black,
    padding: "3%",
    "& span": {
      fontSize: "2.4rem",
      color: theme.status.white,
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.1rem",
      },
    },
  },
  game: {
    color: theme.status.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "5rem",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    // "& h4": {
    //   fontSize: "1.4rem"
    // },
    "& p": {
      [theme.breakpoints.down("md")]: {
        fontSize: "0.9rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.6rem",
      },
    },
  },
  gameLesson: {
    color: theme.status.orange,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Game() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.text}>
      <CardHeader
        // <Typography variant="h4">
        title="CS Build Week 1:"
        // </Typography>
      />
      <CardMedia>
        <img src="../images/JCR.png" alt="John Conway Rules" />
      </CardMedia>

      <CardContent className={classes.game}>
        <Typography variant="body1">
          The above is a picture of the rules of John Conway's Game of Life.
          <br />
          Or at least my version of it, for the first Build Week of Lambda's
          Computer Science portion, aka
          <br />
          My first Solo Build Week
          <br />
          <Link
            href="https://jc-game-of-life.netlify.app"
            color="primary"
            variant="body1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click to Demo
          </Link>
          <br />
          Let's talk about it.
        </Typography>
      </CardContent>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.game}>
          <Typography variant="body1">
            This is my first real project.
            <br />
            I was given a README and told "Go.".
            <br />
            No Team to collaborate with, no advanced instructions or hints.
            <br />
            Honestly for a minute, it was terrifying, and then it was
            exhilarating.
          </Typography>
          <br />
          <Typography variant="body1">
            The Game of Life was created by British Mathematician John Conway in
            1970.
            <br />
            It is a cellular automaton game that is Turing Complete.
            <br />
            Meaning: using a few rules for data manipulation it can create any
            Turing machine (a mathematical model of computation) you can think
            of.
            <br />
            conceptually it is not a difficult game to create but it baffled me
            for a bit to the point of looking for tutorials to really understand
            what i had to do.
            <br />
            The short explanation is that, using the rules pictured above, cells
            on a grid can make a number of cool animations
          </Typography>
          <br />
          <Typography variant="body1">
            Unlike the previous two Build Blogs, i don't have any important yet
            obvious lessons to point out, nor is there any long drawn out story
            to explain how i got there.
            <br />
            Honestly if I had to pick a lesson, I would not, and instead choose
            to reinforce both the previous lessons:
          </Typography>

          <Typography variant="body1" className={classes.gameLesson}>
            Communication and Documentation is the most important thing in a
            team setting.
            <br />
            You never know what you can do, until you do it.
            <br />
            Telling yourself what you can and can't do is a recipe for failure.
          </Typography>
          <CardMedia>
            <img src="../images/PixelSpaceship.gif" alt="Pixel Spaceship" />
          </CardMedia>
        </CardContent>
      </Collapse>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </Card>
  );
}
